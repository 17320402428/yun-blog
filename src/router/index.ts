/*
 * @Author: bin
 * @Date: 2022-09-22 15:17:44
 * @LastEditors: bin
 * @LastEditTime: 2022-09-23 09:01:40
 * @objectDescription: 路由入口文件
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
const routes = [{ path: '/', component: HelloWorld }]
export default createRouter({
    history: createWebHashHistory(),
    routes
})