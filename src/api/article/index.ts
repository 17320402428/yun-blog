import { request } from "@/utils/service"
import type * as Table from './types/article'

export function getTableDataApi(params: Table.IGetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: 'article/page',
    method: 'get',
    params
  })
}
