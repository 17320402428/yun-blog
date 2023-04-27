/*
 * @Author: bin
 * @Date: 2022-09-21 09:51:48
 * @LastEditors: bin
 * @LastEditTime: 2023-04-27 10:30:08
 * @objectDescription: 全局入口文件
 */
import { createApp } from 'vue'
import App from "@/App.vue"
import router from "@/router"
import store from '@/store'
import "@/router/permission"


// elementUI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// load
import { loadSvg } from "@/icons"
import { loadPlugins } from "@/plugins"

// mock文件
import '../mock'
// css
import "uno.css"
import "normalize.css"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"
import "@/styles/index.scss"

const app = createApp(App)
/* 加载全局svg */
loadSvg(app)
loadPlugins(app)
app.use(store)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
