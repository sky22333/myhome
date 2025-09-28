import { defineConfig } from 'vite'
import path from "path"
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    sourcemap: 'inline',
    rollupOptions: {
      output: {
        sourcemapExcludeSources: false,
      },
    },
  },
  css: {
    devSourcemap: true,
  },
  server: {
    allowedHosts: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
    exclude: ['agents'],
    force: true,
  },
  define: {
    global: 'globalThis',
  },
  cacheDir: 'node_modules/.vite'
})
