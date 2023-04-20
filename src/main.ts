/*
 * @Author: bin
 * @Date: 2022-09-21 09:51:48
 * @LastEditors: bin
 * @LastEditTime: 2023-04-18 17:12:08
 * @objectDescription: 全局入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router"
import store from '@/store'
import "@/router/permission"


// elementUI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// mock文件
import '../mock'
// css
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "uno.css"
import './style.css'
import "@/styles/index.scss"
import "normalize.css"

const app = createApp(App)

app.use(store)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
