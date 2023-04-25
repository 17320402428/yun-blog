/*
 * @Author: bin
 * @Date: 2023-04-13 15:49:48
 * @LastEditors: bin
 * @LastEditTime: 2023-04-24 15:00:51
 * @objectDescription: tagsView模块
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
// 引入类型别名
import { type RouteLocationNormalized } from 'vue-router'
// 《Partial》可选属性修饰符
export type ITagView = Partial<RouteLocationNormalized>

// 创建一个store实例
export const useTagsViewStore = defineStore('tags-view', () => {
  const visitedViews = ref<ITagView[]>([])
  const cachedViews = ref<string[]>([])

  //#region add
  const addVisitedView = (view: ITagView) => {
    if (
      visitedViews.value.some((v, index) => {
        if (v.path === view.path) {
          if (v.fullPath !== view.fullPath) {
            visitedViews.value[index] = Object.assign({}, view)
          }
          return true
        }
      })
    ) {
      return
    }
    visitedViews.value.push(Object.assign({}, view))
  }
  const addCachedView = (view: ITagView) => {
    if (typeof view.name !== 'string') return
    if (cachedViews.value.includes(view.name)) return
    if (view.meta?.keepAlive) {
      cachedViews.value.push(view.name)
    }
  }
  //#endregion

  //#region del
  const delVisitedView = (view: ITagView) => {
    for (const [i, v] of visitedViews.value.entries()) {
      if (v.path === view.path) {
        visitedViews.value.splice(i, 1)
        break
      }
    }
  }
  const delCachedView = (view: ITagView) => {
    if (typeof view.name !== 'string') return
    const index = cachedViews.value.indexOf(view.name)
    index > -1 && cachedViews.value.splice(index, 1)
  }
  //#endregion

  //#region delOthers
  const delOthersVisitedViews = (view: ITagView) => {
    visitedViews.value = visitedViews.value.filter(v => {
      return v.meta?.affix || v.path === view.path
    })
  }
  const delOthersCachedViews = (view: ITagView) => {
    if (typeof view.name !== 'string') return
    const index = cachedViews.value.indexOf(view.name)
    if (index > -1) {
      cachedViews.value = cachedViews.value.slice(index, index + 1)
    } else {
      // 如果 index = -1, 没有缓存的 tags
      cachedViews.value = []
    }
  }
  //#endregion

  //#region delAll
  const delAllVisitedViews = () => {
    // keep affix tags
    const affixTags = visitedViews.value.filter(tag => tag.meta?.affix)
    visitedViews.value = affixTags
  }
  const delAllCachedViews = () => {
    cachedViews.value = []
  }
  //#endregion

  return {
    visitedViews,
    cachedViews,
    addVisitedView,
    addCachedView,
    delVisitedView,
    delCachedView,
    delOthersVisitedViews,
    delOthersCachedViews,
    delAllVisitedViews,
    delAllCachedViews
  }
})
