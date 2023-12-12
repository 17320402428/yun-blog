/*
 * @Author: bin
 * @Date: 2023-05-04 16:16:17
 * @LastEditors: bin
 * @LastEditTime: 2023-12-11 10:35:48
 * @objectDescription: 入口文件
 */
import { request } from "@/utils/service"
import type * as Table from './types/user'

export function getTableDataApi(params: Table.IGetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: '/userList',
    method: 'get',
    params
  })
}
