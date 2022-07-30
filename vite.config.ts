import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    proxy: {
      '/todos': {
        target: 'http//localhost:7287/v1',
        secure: false 
      }
    }
  },
  plugins: [react()]
})
