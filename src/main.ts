/*
 * @Author: bin
 * @Date: 2022-09-21 09:51:48
 * @LastEditors: bin
 * @LastEditTime: 2022-09-23 09:04:07
 * @objectDescription: 全局入口文件
 */
import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

// elementUI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 路由文件
import router from './router'
// vuex文件
import store from './store'
// mock文件
import '../mock'

const app = createApp(App)

app.use(store)
app.use(ElementPlus)
app.use(router)

app.mount('#app')
