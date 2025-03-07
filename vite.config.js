// filepath: /home/tijarim7/projet_open_class/projet_7_react/kasa/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/P7_Kasa/',
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
});