import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from other devices on the same network
    port: 5173, // Ensure this is your intended port
  },
})

