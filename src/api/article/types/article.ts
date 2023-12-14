/*
 * @Author: bin
 * @Date: 2023-05-16 11:25:05
 * @LastEditors: bin
 * @LastEditTime: 2023-12-13 09:49:54
 * @objectDescription: 入口文件
 */
export interface IGetTableData {
  title: string
  author: string
}
export interface IGetTableRequestData {
  /** 当前页码 */
  offset: number
  /** 查询条数 */
  limit: number
  /** 查询参数：标题 */
  title?: string
}
export type GetTableResponseData = IApiResponseData<{
  data: IGetTableData[]
  total: number
}>
export interface CreateTableResponseData {
  code: number
}
export interface DeleteTableResponseData {
  code: number
}
export interface DetailTableResponseData {
  code: number
  data: any | any[]
}
export interface EditTableResponseData {
  code: number
}
