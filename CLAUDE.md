# Residencial Alta Vista — site

Site do Residencial Alta Vista (apartamentos prontos em Marau/RS, construtora Fioravanso e Zanchet), administrado pela Tech AET Solidez.
Produção: **https://www.altavistamarau.com.br** (único domínio canônico; `.htaccess` força https + www). Escreva tudo em português do Brasil.

SPA em React 19 + Vite + wouter. **Quase todo o site está em um arquivo: `client/src/App.tsx`.** Os artigos do blog ficam em `client/src/content/artigos.ts`.

## Regra de ouro

1. **`pnpm build` precisa terminar com `0 erro(s)`** antes de todo commit. O build roda `scripts/prerender.mjs`, que verifica o conteúdo e **bloqueia o deploy** se algo estiver errado (mesmo comando roda no GitHub Actions).
2. **Nunca cole um `App.tsx` (ou outro arquivo inteiro) vindo de fora** — Manus, ChatGPT, outra conversa, cópia antiga. Edite no lugar. Foi assim que o commit `931c934` ("Atualiza tabela de preços") apagou o GA4, a meta `fb:pages` e o texto completo de 3 artigos sem ninguém perceber. Antes de commitar, olhe `git diff --stat`: centenas de linhas removidas numa mudança pequena = algo errado.
3. Sempre `git pull` antes de começar.

## Deploy

Push na `main` → `.github/workflows/deploy.yml` → `pnpm install` → `pnpm check` (TypeScript) → `pnpm build` (com verificação) → FTPS de `dist/public/` para a hospedagem (Apache/HostGator). Sem homologação: push na main = no ar em ~1 min.
Só `dist/public/` sobe; arquivos da raiz (este, `scripts/`, `.claude/`) nunca vão para o servidor.

## Como o site é servido (pré-render)

- `pnpm build` = build do cliente → build SSR de `client/src/entry-server.tsx` → `scripts/prerender.mjs` → `dist/public/`.
- O prerender gera o HTML completo de cada rota (Google, WhatsApp/Facebook e IAs leem o conteúdo sem rodar JS): `/` vira `index.html`; as demais vão para `_pages/<rota>.html`. Rotas desconhecidas caem em `spa.html` (shell vazio → React mostra o 404 com `noindex`).
- O `.htaccess` (`client/public/.htaccess`) faz esse roteamento. Mexeu nele? Depois do deploy teste com `curl -sI https://www.altavistamarau.com.br/blog/<slug>` e confira o `<title>` com `curl -s ... | grep '<title>'`.
- Título/description/canonical/og:* de cada página vêm de `useDocumentMeta(...)`; JSON-LD de `useJsonLd(...)`. Os dois funcionam no navegador **e** no prerender — use sempre eles, não mexa em `document.head` direto.
- `sitemap.xml` é **gerado no build** (rotas + artigos + guias). Não existe mais sitemap manual.
- Página nova = adicionar `<Route>` no `App` **e** o caminho em `staticRoutes` (senão não é pré-renderizada nem entra no sitemap).
- Para ver o build como no servidor: `pnpm build` e depois `preview_start` com `alta-vista-dist` (porta 5173, a mesma do dev — não rodam juntos; a 4173 é bloqueada pelo navegador interno).

## Dados fixos (não inventar outros)

- WhatsApp: `+55 (48) 99122-3600` → constante `whatsapp` em `App.tsx` (link `wa.me/5548991223600?text=...`). Atendimento: Leonardo S. Fioravanso.
- E-mail: `fzmarau@gmail.com` · Instagram `@altavista_fz` · Facebook `altavista.marau.rs`
- Endereço: Rua A, nº 46, Marau/RS · Construtora Fioravanso e Zanchet Ltda. · CNPJ 32.149.779/0001-79
- Apartamento: 76,90 m² privativos (137,87 m² total), 2 dormitórios (1 suíte), 2 banheiros, sacada com churrasqueira, 2 vagas, elevador. Prédio pronto, documentação regular, com moradores. 20 unidades no total.
- Pagamento: à vista ou 20% de entrada + financiamento bancário.
- GA4 `G-DDYVYZG0WT` (no `client/index.html`, com `send_page_view: false`; o `GaPageViewTracker` do `App.tsx` dispara o page_view a cada rota) · `fb:pages` `474050969135076`. O build falha se algum dos dois sumir.
- Preços, unidades disponíveis, condições e prazos: **nunca inventar** — perguntar ao Leonardo.
- Identidade de marca e tom de voz: pasta da marca Alta Vista em "Negócios AET" no Google Drive (lida pelas skills `criar-artigo-blog` e `criar-guia-html`).

## Unidade vendida / mudança de preço

1. `App.tsx` → lista `units`: remova a linha da unidade vendida ou ajuste preço. Contagem, escassez ("Últimas N unidades"), "X de 20 vendidas", textos por extenso e o JSON-LD derivam dela sozinhos.
2. `client/public/llms.txt` → linha "Unidades disponíveis" (o build falha se não bater com `units`).
3. Substitua o PDF `client/public/assets/Res Alta Vista - Tabela de Preco.pdf` se o Leonardo mandar um novo.
4. Busque o preço antigo nos artigos: `grep -n "R\$ 4" client/src/content/artigos.ts` — os de MCMV/investidor citam valores.
5. Com 1 unidade restante, revisar os textos no plural (comentário em `units`).

## Novo artigo do blog

1. **Texto:** skill `criar-artigo-blog` (marca "Alta Vista").
2. **Entrada em `client/src/content/artigos.ts`, no topo da lista** (o 1º é destaque no blog e na home). Copie a estrutura de um artigo existente (ex. `novos-limites-minha-casa-minha-vida`):
   - `slug` minúsculo, sem acento, com hífens · `category` em MAIÚSCULAS · `date` no formato `"27 set 2026"` · `excerpt` ≤ 160 caracteres (vira a meta description).
   - `html`: HTML de verdade (nada de `**` ou `- ` de markdown), nesta ordem: `<p class="lead">` → `<nav class="article-toc">` (âncoras para cada `<h2 id>`) → corpo (`h2`, `p`, `ul/ol`, `blockquote`, tabela em `<div class="article-table-wrap"><table class="article-table">`, nota em `<p class="article-note">`) → `<div class="article-cta">` com o botão do WhatsApp → `<section class="article-faq">` (`.faq-item` com `h3` + `p`) → `<section class="article-sources">` (fontes com data). Não repita o título como `h1` (a capa já tem).
   - `jsonLd`: `Article` (com `datePublished`/`dateModified` AAAA-MM-DD e `mainEntityOfPage` = URL do artigo), `FAQPage` (mesmas perguntas do FAQ visível, palavra por palavra) e `BreadcrumbList`.
   - `related`: 3 artigos existentes. E adicione o novo no `related` de 1–3 artigos antigos.
3. **Capa:** `client/public/assets/blog-<tema>.webp`, 1600 px de largura, ≤ 400 KB, exclusiva (é também o og:image do artigo):
   `python3 -c "from PIL import Image; im=Image.open('in.png').convert('RGB'); im.thumbnail((1600,1600)); im.save('client/public/assets/blog-<tema>.webp','WEBP',quality=80,method=6)"`
4. `pnpm build` → `0 erro(s)` → commit "Blog: novo artigo <slug>" → push. Sitemap e pré-render são automáticos.
5. Revisou um artigo publicado? Atualize o `dateModified` do JSON-LD dele.

O build confere: slug, imagem existente, data, markdown esquecido, âncoras do sumário, FAQ do schema = FAQ visível, `related` apontando para artigos que existem.

## Novo guia (isca digital)

1. **Conteúdo:** skill `criar-guia-html` (gera um HTML autocontido).
2. Salve em `client/public/guias/<slug>/index.html` → URL `https://www.altavistamarau.com.br/guias/<slug>/` (com barra no fim). Leva no `<head>`: snippet do GA4 (copie de `client/index.html`), canonical absoluto, `og:*`, favicons.
3. Entra no sitemap sozinho. Se for só para quem deixou contato, ponha `<meta name="robots" content="noindex">` — aí fica fora do sitemap.
4. Linke a partir do site para não ficar órfão: um `<Material ... />` na `MaterialsPage` do `App.tsx` e/ou o CTA de um artigo relacionado.

## Convenções

- **Imagens:** WebP, ≤ 400 KB (o build avisa acima de 500 KB). Os arquivos de `/assets/` têm cache de 1 ano (`immutable`): **trocou uma imagem? Use um nome de arquivo novo**, senão quem já visitou continua vendo a antiga.
- Nenhum arquivo referenciado como `"/assets/..."` pode faltar — o build confere. Os originais (fotos, PDFs, vídeo) ficam no iCloud em `Documents/F&Z - Marau RS/alta-vista-site/`: procure lá antes de concluir que um arquivo não existe.
- Links externos: `target="_blank" rel="noreferrer"`.
- CSS: `client/src/index.css` (site) e `client/src/content/blog-novos.css` (componentes dos artigos). Fontes só no subset latin.
- Tipos: `pnpm check`. Não há testes; a verificação é o `prerender.mjs`.

## SEO / lançamento

Search Console, Bing, Google Business Profile, favicon, og:image, checklist: skill `site-seo-deploy-identidade`.
