/*
 * @Author: bin
 * @Date: 2022-09-22 15:46:41
 * @LastEditors: bin
 * @LastEditTime: 2022-09-22 15:47:23
 * @objectDescription: vuex入口文件
 */
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  mutations: {
    increment(state: any) {
      state.count++
    }
  }
})

export default store
