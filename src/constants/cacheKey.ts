/*
 * @Author: bin
 * @Date: 2023-04-17 09:02:25
 * @LastEditors: bin
 * @LastEditTime: 2023-04-24 08:49:25
 * @objectDescription: 入口文件
 */
const SYSTEM_NAME = "yungui-blog"

/** 缓存数据时用到的 Key */
class CacheKey {
  static TOKEN = `${SYSTEM_NAME}-token-key`
  static SIDEBAR_STATUS = `${SYSTEM_NAME}-sidebar-status-key`
  static ACTIVE_THEME_NAME = `${SYSTEM_NAME}-active-theme-name-key`
  static USER_INFO = `${SYSTEM_NAME}-user-info-key`
}

export default CacheKey
