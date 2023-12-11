/*
 * @Author: bin
 * @Date: 2023-04-17 09:12:36
 * @LastEditors: bin
 * @LastEditTime: 2023-12-08 14:56:46
 * @objectDescription: 入口文件
 */
import { request } from "@/utils/service"
import type * as Login from "./types/login"

/** 获取登录验证码 */
export function getLoginCodeApi() {
  return request<Login.LoginCodeResponseData>({
    url: "login/code",
    method: "get"
  })
}

/** 登录并返回 Token */
export function loginApi(data: Login.ILoginRequestData) {
  return request<Login.LoginResponseData>({
    url: "/login",
    method: "post",
    data
  })
}
/** 获取用户详情 */
export function getUserInfoApi() {
  return request<Login.UserInfoResponseData>({
    url: "/getUserInfo",
    method: "get"
  })
}
