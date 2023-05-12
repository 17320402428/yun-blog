/*
 * @Author: bin
 * @Date: 2023-05-04 16:16:17
 * @LastEditors: bin
 * @LastEditTime: 2023-05-09 16:04:57
 * @objectDescription: 入口文件
 */
import { request } from "@/utils/service"
import type * as Table from './types/table'

export function getTableDataApi(params: Table.IGetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: 'user/page',
    method: 'get',
    params
  })
}
