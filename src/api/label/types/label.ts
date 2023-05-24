/*
 * @Author: bin
 * @Date: 2023-05-18 16:39:38
 * @LastEditors: bin
 * @LastEditTime: 2023-05-18 16:39:57
 * @objectDescription: 入口文件
 */
export interface IGetTableData {
  labelName: string,
  creatAt?: string
}
export interface IGetTableRequestData {
  /** 当前页码 */
  currentPage: number
  /** 查询条数 */
  size: number
  /** 查询参数：标题 */
  labelName?: string
}
export type GetTableResponseData = IApiResponseData<{
  list: IGetTableData[],
  total: number
}>