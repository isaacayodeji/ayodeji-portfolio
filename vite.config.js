import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works on https://<user>.github.io/<repo>/ and any other host.
// Three.js lives in its own chunk and loads only when the hero scene mounts.
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: {
    target: "es2020",
    rollupOptions: {
      output: {
        manualChunks: (id) => (id.includes("node_modules/three") ? "three" : undefined),
      },
    },
  },
});
