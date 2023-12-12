/*
 * @Author: bin
 * @Date: 2023-04-28 15:39:05
 * @LastEditors: bin
 * @LastEditTime: 2023-12-11 11:17:23
 * @objectDescription: 入口文件
 */
export interface IGetTableData {
  username: string,
  id: string,
  email?: string,
  usertype?: string,
  creatAt?: string
}

export interface IGetTableRequestData {
  /** 当前页码 */
  offset: number
  /** 查询条数 */
  limit: number
  /** 查询参数：用户名 */
  username?: string
  /** 查询参数：手机号 */
  email?: string
}

export type GetTableResponseData = IApiResponseData<{
  data: IGetTableData[],
  total: number
}>
