import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Relative base so the build works on https://<user>.github.io/<repo>/ and any other host.
export default defineConfig({
  base: "./",
  plugins: [react()],
});
