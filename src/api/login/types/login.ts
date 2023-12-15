/*
 * @Author: bin
 * @Date: 2023-04-17 09:12:36
 * @LastEditors: bin
 * @LastEditTime: 2023-12-14 10:26:48
 * @objectDescription: 入口文件
 */
export interface ILoginRequestData {
  /** admin 或 editor */
  username: string
  /** 密码 */
  password: string
  /** 验证码 */
  // code: string
}

export type LoginCodeResponseData = IApiResponseData<string>

export type LoginResponseData = IApiResponseData<{
  token: string
  accesstoken: string
  userid: string
}>

export type UserInfoResponseData = IApiResponseData<{ username: string; roles: string[] }>
