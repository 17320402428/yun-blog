/*
 * @Author: bin
 * @Date: 2023-05-16 11:25:05
 * @LastEditors: bin
 * @LastEditTime: 2023-05-16 11:45:11
 * @objectDescription: 入口文件
 */
export interface IGetTableData {
  title: string,
  author: string,
  classification: string,
  creatAt?: string
}
export interface IGetTableRequestData {
  /** 当前页码 */
  currentPage: number
  /** 查询条数 */
  size: number
  /** 查询参数：标题 */
  title?: string
}
export type GetTableResponseData = IApiResponseData<{
  list: IGetTableData[],
  total: number
}>
