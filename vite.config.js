import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Assure-toi que le base path est correctement configuré pour la production
  base: process.env.NODE_ENV === 'production' ? '/P7_Kasa/' : '/',
})
