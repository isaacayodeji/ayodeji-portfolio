import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Emit a classic (non-module) script so the build also works when index.html is
// opened straight from disk (file://), where browsers block module scripts.
const classicScript = () => ({
  name: "classic-script",
  enforce: "post",
  apply: "build",
  transformIndexHtml(html) {
    return html
      .replace(/<script type="module" crossorigin src="([^"]+)"><\/script>/, "")
      .replace(/<\/body>/, (m) => {
        const src = html.match(/<script type="module" crossorigin src="([^"]+)"/)?.[1];
        return `<script defer src="${src}"></script>\n  ${m}`;
      })
      .replace(/ crossorigin/g, "");
  },
});

// Relative base so the build works on https://<user>.github.io/<repo>/ and any other host.
export default defineConfig({
  base: "./",
  plugins: [react(), classicScript()],
  build: {
    rollupOptions: { output: { format: "iife", inlineDynamicImports: true } },
  },
});
