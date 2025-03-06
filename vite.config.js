import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/P7_Kasa/", // Ajoute cette ligne
  plugins: [react()],
})
