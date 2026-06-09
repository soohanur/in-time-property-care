import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' so production assets resolve from the site root regardless of host
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
  },
})
