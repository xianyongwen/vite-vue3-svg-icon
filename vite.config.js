import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), 
      "SVG_PATH": path.resolve(__dirname, "./src/assets/svg")
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, './src/components/svgIcon.vue'),
      name: 'svgIcon',
      fileName: (format) => `svg-icon.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
