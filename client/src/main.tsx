import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Páginas pré-renderizadas no build já chegam com HTML dentro de #root: hidrata em vez de recriar.
const root = document.getElementById("root")!;
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
