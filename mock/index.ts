/*
 * @Author: bin
 * @Date: 2022-09-22 15:55:30
 * @LastEditors: bin
 * @LastEditTime: 2022-09-22 15:55:48
 * @objectDescription: mock文件
 */
// index.ts
import Mock from 'mockjs'

// 设置拦截ajax请求的相应时间
Mock.setup({
  timeout: '200-600'
})

Mock.mock('/user/login', 'post', (params: any) => {
  return {
    data: { token: '123' },
    status: 200,
    message: 'success'
  }
})

export default {}
