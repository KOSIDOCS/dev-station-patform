import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pages from 'vite-plugin-pages'
import layouts from 'vite-plugin-vue-layouts'
import components from 'unplugin-vue-components/vite'
import viteESLint from '@ehutch79/vite-eslint'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
// import { PUBLIC_ROUTES } from './src/constants/public-routes'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  plugins: [
    vue(),
    pages(),
    layouts(),
    components({ directoryAsNamespace: true }),
    process.env.NODE_ENV === 'development' &&
      viteESLint({ include: ['src/**/*.vue', 'src/**/*.ts'] }),
    vueI18n({
      include: path.resolve(__dirname, 'src/locales/**')
    })
  ],
  server: {
    host: '0.0.0.0',
    port: 5000
  },
  build: {
    chunkSizeWarningLimit: 1024
  }
})
