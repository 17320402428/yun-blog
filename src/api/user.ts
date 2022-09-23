/*
 * @Author: bin
 * @Date: 2022-09-22 15:51:49
 * @LastEditors: bin
 * @LastEditTime: 2022-09-23 08:56:51
 * @objectDescription: 登录模块api
 */
// @ts-ignore
import request from '../utils/request.js'

export function login(data: any) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}
