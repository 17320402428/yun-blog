/*
 * @Author: bin
 * @Date: 2023-04-17 08:56:11
 * @LastEditors: bin
 * @LastEditTime: 2023-12-13 09:25:44
 * @objectDescription: 入口文件
 */
/** 统一处理 Cookie */

import CacheKey from "@/constants/cacheKey"
import Cookies from "js-cookie"

export const getToken = () => {
  return Cookies.get(CacheKey.TOKEN)
}
export const setToken = (token: string) => {
  Cookies.set(CacheKey.TOKEN, token)
}
export const removeToken = () => {
  Cookies.remove(CacheKey.TOKEN)
}
export const setUserInfo = (userInfo: any) => {
  Cookies.set(CacheKey.USER_INFO, userInfo)
}
export const getUserInfo = () => {
  return Cookies.get(CacheKey.USER_INFO)
}
