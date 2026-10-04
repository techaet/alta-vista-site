// Usado só no build (scripts/prerender.mjs) para gerar o HTML de cada rota.
import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App, { ssrHead, staticRoutes, units } from "./App";
import { artigos } from "./content/artigos";

export { artigos, staticRoutes, units };

export function render(path: string) {
  Object.assign(ssrHead, { title: "", description: "", path, image: "", noindex: false, jsonLd: [] });
  const html = renderToString(<Router ssrPath={path}><App /></Router>);
  return { html, head: { ...ssrHead } };
}
