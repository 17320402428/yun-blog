/*
 * @Author: bin
 * @Date: 2023-05-04 16:16:17
 * @LastEditors: bin
 * @LastEditTime: 2023-12-19 09:13:48
 * @objectDescription: 入口文件
 */
import { request } from "@/utils/service"
import type * as Table from './types/label'

export function getTableDataApi(params: Table.IGetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: 'getTags',
    method: 'get',
    params
  })
}

export function deleteTagApi(data) {
  return request({
    url: 'deleteTag',
    method: 'post',
    data
  })
}

export function createTagApi(data) {
  return request({
    url: 'createTag',
    method: 'post',
    data
  })
}

export function updateTagApi(data) {
  return request({
    url: 'updateTag',
    method: 'post',
    data
  })
}
