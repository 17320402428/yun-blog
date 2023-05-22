/*
 * @Author: bin
 * @Date: 2023-05-18 17:12:33
 * @LastEditors: bin
 * @LastEditTime: 2023-05-19 15:53:11
 * @objectDescription: 入口文件
 */
import { request } from "@/utils/service"
import type * as Table from './types/comment'

export function getTableDataApi(params: Table.IGetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: 'comment/page',
    method: 'get',
    params
  })
}

export function commentPassApi(params) {
  return request({
    url: 'comment/pass',
    method: 'get',
    params: {
      id: params
    }
  })
}

export function commentRejectApi(params) {
  return request({
    url: 'comment/reject',
    method: 'get',
    params: {
      id: params
    }
  })
}
