import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/P7_Kasa/',  // Change ici pour correspondre au nom de ton projet GitHub
})
