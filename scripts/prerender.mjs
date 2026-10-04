// Roda no fim do `pnpm build` (e portanto no deploy). Três trabalhos:
// 1. Verifica o conteúdo — qualquer ERRO aborta o build e bloqueia o deploy.
// 2. Pré-renderiza cada rota em HTML (Google, WhatsApp/Facebook e IAs leem sem rodar JS).
//    "/" vira dist/public/index.html; as demais vão para dist/public/_pages/<rota>.html,
//    servidas pelo .htaccess. dist/public/spa.html é o shell vazio para rotas desconhecidas.
// 3. Gera dist/public/sitemap.xml (rotas + artigos + guias em client/public/guias/).
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const pub = path.join(root, "client/public");
const out = path.join(root, "dist/public");
const site = "https://www.altavistamarau.com.br";
const { render, artigos, staticRoutes, units } = await import(path.join(root, "dist/ssr/entry-server.js"));

const errors = [];
const warnings = [];

// ---------- 1. Verificações ----------
const template = fs.readFileSync(path.join(out, "index.html"), "utf8");
if (!template.includes("G-DDYVYZG0WT")) errors.push("index.html sem a tag do GA4 (G-DDYVYZG0WT)");
if (!template.includes('property="fb:pages"')) errors.push('index.html sem <meta property="fb:pages">');

const slugs = new Set();
const textOf = html => html.replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/\s+/g, " ");
for (const a of artigos) {
  const where = `artigo "${a.slug}"`;
  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(a.slug)) errors.push(`${where}: slug deve ser minúsculo, sem acento, com hífens`);
  if (slugs.has(a.slug)) errors.push(`${where}: slug duplicado`);
  slugs.add(a.slug);
  if (!fs.existsSync(path.join(pub, a.image))) errors.push(`${where}: imagem ${a.image} não existe em client/public`);
  if (a.excerpt.length > 160) warnings.push(`${where}: excerpt com ${a.excerpt.length} caracteres (ideal ≤ 160, vira meta description)`);
  if (/\*\*|\]\(|^\s*- /m.test(a.html)) errors.push(`${where}: sobrou markdown no html (**, [](), "- ")`);
  if (!/^\d{2} [a-z]{3} \d{4}$/.test(a.date)) errors.push(`${where}: date deve ser no formato "27 set 2026"`);
  const types = a.jsonLd.map(j => j["@type"]);
  for (const t of ["Article", "FAQPage", "BreadcrumbList"]) if (!types.includes(t)) errors.push(`${where}: jsonLd sem ${t}`);
  const art = a.jsonLd.find(j => j["@type"] === "Article");
  if (art && art.mainEntityOfPage !== `${site}/blog/${a.slug}`) errors.push(`${where}: Article.mainEntityOfPage não bate com o slug`);
  if (art && !/^\d{4}-\d{2}-\d{2}$/.test(art.dateModified ?? "")) errors.push(`${where}: Article.dateModified deve ser AAAA-MM-DD`);
  const visible = textOf(a.html);
  for (const q of a.jsonLd.find(j => j["@type"] === "FAQPage")?.mainEntity ?? []) {
    if (!visible.includes(q.name)) errors.push(`${where}: pergunta do FAQPage não aparece no texto: "${q.name}"`);
  }
  for (const id of a.html.matchAll(/href="#([^"]+)"/g)) {
    if (!a.html.includes(`id="${id[1]}"`)) errors.push(`${where}: sumário aponta para #${id[1]}, que não existe`);
  }
}
for (const a of artigos) for (const r of a.related) {
  if (!slugs.has(r.href.replace("/blog/", ""))) errors.push(`artigo "${a.slug}": "Leia também" aponta para ${r.href}, que não existe`);
}

const llms = fs.readFileSync(path.join(pub, "llms.txt"), "utf8");
for (const u of units) {
  if (!llms.includes(u.id) || !llms.includes(u.price)) errors.push(`llms.txt desatualizado: unidade ${u.id} / ${u.price}`);
}

const sources = fs.readFileSync(path.join(root, "client/src/App.tsx"), "utf8") + artigos.map(a => a.html).join("");
for (const [, asset] of sources.matchAll(/"(\/assets\/[^"]+)"/g)) {
  if (!fs.existsSync(path.join(pub, asset))) errors.push(`arquivo referenciado não existe: client/public${asset}`);
}

for (const f of fs.readdirSync(path.join(pub, "assets"))) {
  const kb = fs.statSync(path.join(pub, "assets", f)).size / 1024;
  if (/\.(webp|jpe?g|png)$/.test(f) && kb > 500) warnings.push(`imagem pesada: assets/${f} (${Math.round(kb)} KB, ideal ≤ 400 KB)`);
}

// ---------- 2. Pré-render ----------
const attr = s => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
const setTag = (html, re, value) => {
  if (!re.test(html)) throw new Error(`index.html: tag não encontrada ${re}`);
  return html.replace(re, `$1${attr(value)}$2`);
};
fs.writeFileSync(path.join(out, "spa.html"), template);

const routes = [...staticRoutes, ...artigos.map(a => `/blog/${a.slug}`)];
for (const route of routes) {
  const { html, head } = render(route);
  if (!head.title || !html.includes("<h1")) errors.push(`pré-render de ${route}: sem título ou sem <h1>`);
  let page = template;
  page = page.replace(/<title>[^<]*<\/title>/, `<title>${attr(head.title)}</title>`);
  page = setTag(page, /(<meta name="description" content=")[^"]*(")/, head.description);
  page = setTag(page, /(<link rel="canonical" href=")[^"]*(")/, site + head.path);
  page = setTag(page, /(<meta property="og:title" content=")[^"]*(")/, head.title);
  page = setTag(page, /(<meta property="og:description" content=")[^"]*(")/, head.description);
  page = setTag(page, /(<meta property="og:url" content=")[^"]*(")/, site + head.path);
  page = setTag(page, /(<meta property="og:image" content=")[^"]*(")/, site + head.image);
  if (route.startsWith("/blog/")) page = setTag(page, /(<meta property="og:type" content=")[^"]*(")/, "article");
  const extra = head.jsonLd.map(j => `<script type="application/ld+json" data-ld>${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`).join("")
    + (head.noindex ? '<meta name="robots" content="noindex" />' : "");
  page = page.replace("</head>", `${extra}</head>`).replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  const file = route === "/" ? path.join(out, "index.html") : path.join(out, "_pages", `${route}.html`);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page);
}

// ---------- 3. Sitemap ----------
const guias = fs.existsSync(path.join(pub, "guias"))
  ? fs.readdirSync(path.join(pub, "guias")).filter(d => {
      const f = path.join(pub, "guias", d, "index.html");
      return fs.existsSync(f) && !/name="robots" content="[^"]*noindex/.test(fs.readFileSync(f, "utf8"));
    })
  : [];
const modified = a => a.jsonLd.find(j => j["@type"] === "Article").dateModified;
const urls = [
  ...staticRoutes.map(r => `<url><loc>${site}${r}</loc></url>`),
  ...artigos.map(a => `<url><loc>${site}/blog/${a.slug}</loc><lastmod>${modified(a)}</lastmod></url>`),
  ...guias.map(g => `<url><loc>${site}/guias/${g}/</loc></url>`),
];
fs.writeFileSync(path.join(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  ${urls.join("\n  ")}\n</urlset>\n`);

for (const w of warnings) console.warn(`AVISO: ${w}`);
for (const e of errors) console.error(`ERRO: ${e}`);
if (errors.length) process.exit(1);
console.log(`prerender: ${routes.length} páginas, ${urls.length} URLs no sitemap, ${warnings.length} aviso(s), 0 erro(s)`);
