/*
 * @Author: bin
 * @Date: 2023-05-16 11:24:53
 * @LastEditors: bin
 * @LastEditTime: 2023-12-13 11:28:24
 * @objectDescription: 入口文件
 */
import { request } from "@/utils/service"
import type * as Table from './types/article'

export function getTableDataApi(params: Table.IGetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: 'getArticle',
    method: 'get',
    params
  })
}
export function createArticleApi(data) {
  return request<Table.CreateTableResponseData>({
    url: 'createArticle',
    method: 'post',
    data
  })
}
export function deleteArticleApi(data) {
  return request<Table.DeleteTableResponseData>({
    url: 'deleteArticle',
    method: 'post',
    data
  })
}
export function detailArticleApi(params) {
  return request<Table.DetailTableResponseData>({
    url: 'detailArticle',
    method: 'get',
    params
  })
}
export function editArticleApi(data) {
  return request<Table.EditTableResponseData>({
    url: 'updateArticle',
    method: 'post',
    data
  })
}
