/*
 * @Author: bin
 * @Date: 2023-05-04 16:16:17
 * @LastEditors: bin
 * @LastEditTime: 2023-05-22 11:13:27
 * @objectDescription: 入口文件
 */
import { request } from "@/utils/service"
import type * as Table from './types/label'

export function getTableDataApi(params: Table.IGetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: 'label/page',
    method: 'get',
    params
  })
}
