import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/P7_Kasa/', // Assurez-vous que la base est correcte pour GitHub Pages
})