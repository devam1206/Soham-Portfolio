import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        format: 'iife',
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash].[ext]'
      }
    },
    target: 'es2015',
    minify: 'terser',
    sourcemap: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  },
  server: {
    port: 3000,
    strictPort: true
  }
})
