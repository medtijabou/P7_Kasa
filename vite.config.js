import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/P7_Kasa/',  // Assurez-vous que le chemin de base correspond à votre nom de repository
})
