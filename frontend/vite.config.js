import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    extensions: [".js", ".json", ".vue", ".scss"],
    alias: {
      "@/": `${path.resolve(__dirname, "src")}/`,
      components: `${path.resolve(__dirname, "src/components")}`,
      styles: `${path.resolve(__dirname, "src/assets/styles")}`,
      utils: `${path.resolve(__dirname, "src/utils")}`,
      pages: `${path.resolve(__dirname, "src/pages")}`,
      constants: `${path.resolve(__dirname, "src/constants")}`,
      layouts: `${path.resolve(__dirname, "src/layouts")}`,
      vue: "@vue/compat",
    },
  },
});
