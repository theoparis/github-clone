import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "@lib": path.resolve("src/lib"),
      "@components": path.resolve("src/components"),
      "@stores": path.resolve("src/stores"),
      "@utils": path.resolve("src/utils"),
      "@styles": path.resolve("src/styles"),
      "@assets": path.resolve("src/assets"),
    },
  },
});
