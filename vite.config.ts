import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

const paths = {
  src: path.resolve(__dirname, "src"),
  html: path.resolve(__dirname, "src", "assets", "html"),
  build: path.resolve(__dirname, "build"),
};
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 3002,
  },
  resolve: {
    alias: {
      "@": paths.src,
    },
  },
  base: "./",
});
