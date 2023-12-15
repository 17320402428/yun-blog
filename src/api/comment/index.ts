/*
 * @Author: bin
 * @Date: 2023-05-18 17:12:33
 * @LastEditors: bin
 * @LastEditTime: 2023-12-15 17:17:40
 * @objectDescription: 入口文件
 */
import { request } from "@/utils/service"
import type * as Table from './types/comment'

export function getTableDataApi(params: Table.IGetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: 'getCommentList',
    method: 'get',
    params
  })
}

export function commentPassApi(data) {
  return request({
    url: 'updatedComment',
    method: 'post',
    data
  })
}
export function deleteCommentApi(data) {
  return request({
    url: 'deleteComment',
    method: 'post',
    data
  })
}
