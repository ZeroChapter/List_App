import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/List_App/" : "/",
  plugins: [react()],
  server: {
    host: true,
  },
  resolve: {
    alias: [{ find: "src", replacement: path.resolve(__dirname, "src") }],
  },
});
