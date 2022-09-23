/*
 * @Author: bin
 * @Date: 2022-09-21 09:51:50
 * @LastEditors: bin
 * @LastEditTime: 2022-09-22 15:31:56
 * @objectDescription: vite配置文件
 */
import { defineConfig } from 'vite'
import {resolve} from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
