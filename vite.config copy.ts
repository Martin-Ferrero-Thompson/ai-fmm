import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'src/pages/about/index.html'),
        whereToNext: resolve(__dirname, 'src/pages/where-to-next/index.html'),
        sponsors: resolve(__dirname, 'src/pages/sponsors/index.html'),
        rideDiary: resolve(__dirname, 'src/pages/ride-diary/index.html'),
        photos: resolve(__dirname, 'src/pages/photos/index.html'),
        faq: resolve(__dirname, 'src/pages/faq/index.html'),
        contact: resolve(__dirname, 'src/pages/contact/index.html'),
        disclaimer: resolve(__dirname, 'src/pages/disclaimer/index.html'),
      },
    },
  },
})