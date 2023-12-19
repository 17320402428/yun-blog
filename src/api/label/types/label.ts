/*
 * @Author: bin
 * @Date: 2023-05-18 16:39:38
 * @LastEditors: bin
 * @LastEditTime: 2023-12-18 15:39:13
 * @objectDescription: 入口文件
 */
export interface IGetTableData {
  labelName: string,
  creatAt?: string
}
export interface IGetTableRequestData {
  /** 当前页码 */
  offset: number
  /** 查询条数 */
  limit: number
  /** 查询参数：标题 */
  labelName?: string
}
export type GetTableResponseData = IApiResponseData<{
  data: IGetTableData[],
  total: number
}>
export type TableResponseData = IApiResponseData<{
  data: any[]
}>
