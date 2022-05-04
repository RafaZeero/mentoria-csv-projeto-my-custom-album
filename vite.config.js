import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mentoria-csv-projeto-my-custom-album/',
  plugins: [react()]
})
