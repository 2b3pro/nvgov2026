import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lombardo: resolve(__dirname, 'candidates/lombardo.html'),
        ford: resolve(__dirname, 'candidates/ford.html'),
        hill: resolve(__dirname, 'candidates/hill.html'),
        compare: resolve(__dirname, 'compare/index.html'),
        about: resolve(__dirname, 'about.html'),
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
})
