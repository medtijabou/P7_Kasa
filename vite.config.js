import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/P7_Kasa/', // Assure-toi que ce chemin correspond au nom de ton repo GitHub
});
