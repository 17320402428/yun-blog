/*
 * @Author: bin
 * @Date: 2023-04-28 15:39:05
 * @LastEditors: bin
 * @LastEditTime: 2023-05-16 11:29:03
 * @objectDescription: 入口文件
 */
export interface IGetTableData {
  username: string,
  id: string,
  email?: string,
  phone?: string,
  creatAt?: string
}

export interface IGetTableRequestData {
  /** 当前页码 */
  currentPage: number
  /** 查询条数 */
  size: number
  /** 查询参数：用户名 */
  username?: string
  /** 查询参数：手机号 */
  phone?: string
}

export type GetTableResponseData = IApiResponseData<{
  list: IGetTableData[],
  total: number
}>
