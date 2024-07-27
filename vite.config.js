import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio-An/",
  server: {
    port: 3000,
    hot: true,
    open: true,
  },
});
