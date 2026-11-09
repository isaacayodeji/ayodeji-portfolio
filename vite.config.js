import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works on https://<user>.github.io/<repo>/ and any other host.
// Three.js lives in its own chunk and loads only when the hero scene mounts.
// Dev-only: another project once registered a Workbox/PWA service worker on localhost:5173, and the
// browser keeps serving that app (src/main.tsx 404 -> blank page). When the browser re-checks the
// worker script, answer with a "kill switch" worker that clears its caches, unregisters itself and
// reloads open tabs so they fetch this site from the dev server.
const KILL_SW = `self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil((async () => {
  for (const k of await caches.keys()) await caches.delete(k);
  await self.registration.unregister();
  for (const c of await self.clients.matchAll({ type: "window" })) c.navigate(c.url);
})()));`;
const swKillSwitch = () => ({
  name: "stale-sw-kill-switch",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const path = (req.url || "").split("?")[0];
      if (!/^\/(dev-)?(sw|service-worker|serviceworker)\.js$/.test(path)) return next();
      res.setHeader("Content-Type", "application/javascript");
      res.setHeader("Cache-Control", "no-store");
      res.setHeader("Clear-Site-Data", '"cache", "storage"');
      res.end(KILL_SW);
    });
  },
});

export default defineConfig({
  base: "./",
  plugins: [react(), swKillSwitch()],
  server: {
    // Windows locks files while editors/OneDrive write them (e.g. dp.jpeg.~tmp); a locked file
    // makes the watcher throw EBUSY and kills the dev server, so skip editor temp files. Don't ignore
    // public/assets itself: Vite 5 builds its list of public files from the watcher, so images added
    // while the server runs would 404 (served as index.html) until a restart.
    watch: { ignored: ["**/*.~tmp", "**/*.tmp", "**/~$*"] },
  },
  build: {
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: (id) => (id.includes("node_modules/three") ? "three" : undefined),
      },
    },
  },
});
