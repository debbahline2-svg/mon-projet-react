import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'mon-projet-react-production-986f.up.railway.app'
    ],
    // Optionnel : s'assurer qu'il écoute bien sur toutes les interfaces réseau du conteneur
    host: true,
    port: process.env.PORT || 5173,
  }
})