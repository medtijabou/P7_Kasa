import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/P7_Kasa/", // 🔹 Ajoute ceci pour GitHub Pages
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  resolve: {
    extensions: [".js", ".jsx"], // 🔹 Accepte les fichiers .jsx
  },
  esbuild: {
    loader: "jsx", // 🔹 Assure la bonne gestion du JSX
  },
});
