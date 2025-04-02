import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/P7_Kasa/",  // Assure-toi que ce chemin est correct
  plugins: [react()],
  server: {
    host: true, // Permet l'accès via IP locale
    port: 3000  // Change si besoin
  },
});
