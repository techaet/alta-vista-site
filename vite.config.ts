import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";

// Nota: os plugins do editor visual do Manus (jsx-loc, manus-runtime,
// debug-collector, storage-proxy) foram removidos deste config de produção.
// Eles servem apenas ao ambiente de edição do Manus e, se mantidos,
// injetam um script de runtime de ~350KB em toda página e atributos de
// depuração no HTML — sem função nenhuma fora do editor do Manus.

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets"),
    },
  },
  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),
  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true,
  },
});
