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
        winterhawk: resolve(__dirname, 'candidates/winterhawk.html'),
        hansen: resolve(__dirname, 'candidates/hansen.html'),
        compare: resolve(__dirname, 'compare/index.html'),
        compare_gop: resolve(__dirname, 'compare/gop-primary.html'),
        compare_dem: resolve(__dirname, 'compare/primary.html'),
        about: resolve(__dirname, 'about.html'),
        sources: resolve(__dirname, 'sources.html'),
        updates: resolve(__dirname, 'updates.html'),
        // Issue Pages
        issues_index: resolve(__dirname, 'compare/issues/index.html'),
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
        issues_labor: resolve(__dirname, 'compare/issues/labor.html'),
        // Context/Deep-dive Pages
        context_education: resolve(__dirname, 'compare/issues/context/education.html'),
        context_energy: resolve(__dirname, 'compare/issues/context/energy.html'),
      },
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
})
