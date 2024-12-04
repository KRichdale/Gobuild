import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'
import svgLoader from 'vite-svg-loader'

export default defineConfig({
  base: '/Gobuild/',
  plugins: [
    vue(),
    vuetify({ autoImport: true }), // Enable auto-import for Vuetify components and directives
    svgLoader() // Handle SVG imports
  ],
  resolve: {
    alias: {
      '@': '/home/druss/GoBuild/src' // Simplify import paths
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use 'vuetify/styles' as *;` // Globally include Vuetify styles
      }
    }
  }
})
