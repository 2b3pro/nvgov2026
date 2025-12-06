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
        // Issue Pages
        issues_housing: resolve(__dirname, 'compare/issues/housing.html'),
        issues_economy: resolve(__dirname, 'compare/issues/economy.html'),
        issues_crime: resolve(__dirname, 'compare/issues/crime.html'),
        issues_education: resolve(__dirname, 'compare/issues/education.html'),
        issues_guns: resolve(__dirname, 'compare/issues/guns.html'),
        issues_healthcare: resolve(__dirname, 'compare/issues/healthcare.html'),
        issues_taxes: resolve(__dirname, 'compare/issues/taxes.html'),
        issues_immigration: resolve(__dirname, 'compare/issues/immigration.html'),
        issues_environment: resolve(__dirname, 'compare/issues/environment.html'),
        issues_transparency: resolve(__dirname, 'compare/issues/transparency.html'),
        issues_abortion: resolve(__dirname, 'compare/issues/abortion.html'),
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
})
