import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: ["babel-plugin-styled-components"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    outDir: "build", // Папка для сборки (по умолчанию `dist`, но у вас указано `build`)
  },
  base: "/portfolio-vite-main/", // Укажите имя вашего репозитория на GitHub
});