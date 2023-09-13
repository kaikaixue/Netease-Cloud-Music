import {
  defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import {
  resolve
} from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {
  ElementPlusResolver
} from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/')
    }
  },
  css: {
    postcss: {
      plugins: [{
        postcssPlugin: 'internal:charset-removal',
        AtRule: {
          charset: (atRule) => {
            if (atRule.name === 'charset') {
              atRule.remove();
            }
          }
        }
      }]
    }
  },
  server: {
    //用来配置跨域
    host: true,
    port: 8000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', //目标服务器地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    }
  },
  
})