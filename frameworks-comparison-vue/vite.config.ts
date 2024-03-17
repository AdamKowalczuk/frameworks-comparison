import { fileURLToPath, URL } from "node:url";
import dotenv from "dotenv";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

dotenv.config();

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  define: {
    "process.env": process.env,
  },
});
