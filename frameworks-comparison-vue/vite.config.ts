import dotenv from "dotenv";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

dotenv.config();

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  define: {
    "process.env": process.env,
  },
});
