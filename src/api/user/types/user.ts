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
