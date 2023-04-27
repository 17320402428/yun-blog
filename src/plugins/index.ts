/*
 * @Author: bin
 * @Date: 2023-04-27 10:24:07
 * @LastEditors: bin
 * @LastEditTime: 2023-04-27 10:24:17
 * @objectDescription: 入口文件
 */
import { type App } from "vue"
import { loadElementPlus } from "./element-plus"
import { loadElementPlusIcon } from "./element-plus-icon"

export function loadPlugins(app: App) {
  loadElementPlus(app)
  loadElementPlusIcon(app)
}
