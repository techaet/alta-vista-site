# Serve dist/public imitando o .htaccess da hospedagem (_pages/ + fallback spa.html),
# para conferir o pré-render e a hidratação antes do deploy. Uso: pnpm build && python3 scripts/servir-dist.py
import http.server, os, sys

ROOT = os.path.join(os.path.dirname(__file__), "..", "dist", "public")

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=ROOT, **k)

    def do_GET(self):
        path = self.path.split("?")[0]
        if not os.path.isfile(os.path.join(ROOT, path.lstrip("/"))) and path != "/":
            page = os.path.join("_pages", path.lstrip("/") + ".html")
            self.path = "/" + (page if os.path.isfile(os.path.join(ROOT, page)) else "spa.html")
        super().do_GET()

http.server.ThreadingHTTPServer(("127.0.0.1", int(sys.argv[1]) if len(sys.argv) > 1 else 4173), Handler).serve_forever()
