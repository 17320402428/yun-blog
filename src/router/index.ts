/*
 * @Author: bin
 * @Date: 2022-09-22 15:17:44
 * @LastEditors: bin
 * @LastEditTime: 2023-04-27 09:24:48
 * @objectDescription: 路由入口文件
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const Layout = () => import("@/layout/index.vue")
// RouteRecordRaw内置类型接口
export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/redirect",
    component: Layout,
    meta: {
      hidden: true
    },
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index.vue")
      }
    ]
  },
  {
    path: "/403",
    component: () => import("@/views/error-page/403.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/404",
    component: () => import("@/views/error-page/404.vue"),
    meta: {
      hidden: true
    },
    alias: "/:pathMatch(.*)*"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/",
    component: Layout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        component: () => import("@/views/dashboard/index.vue"),
        name: "Dashboard",
        meta: {
          title: "首页",
          svgIcon: "dashboard",
          affix: true
        }
      }
    ]
  },
  {
    path: "/user",
    component: Layout,
    redirect: "/user/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/user/index.vue"),
        name: "User",
        meta: {
          title: "用户管理",
          svgIcon: "user",
        }
      }
    ]
  },
  {
    path: "/article",
    component: Layout,
    redirect: "/article/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/article/index.vue"),
        name: "Article",
        meta: {
          title: "文章管理",
          svgIcon: "article",
        }
      }
    ]
  },
  {
    path: "/comment",
    component: Layout,
    redirect: "/comment/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/comment/index.vue"),
        name: "Comment",
        meta: {
          title: "评论管理",
          svgIcon: "comment",
        }
      }
    ]
  },
  {
    path: "/label",
    component: Layout,
    redirect: "/label/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/label/index.vue"),
        name: "Label",
        meta: {
          title: "标签管理",
          svgIcon: "label",
        }
      }
    ]
  },
  {
    path: "/setting",
    component: Layout,
    redirect: "/setting/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/setting/index.vue"),
        name: "Setting",
        meta: {
          title: "网站管理",
          svgIcon: "setting",
        }
      }
    ]
  },
  {
    path: "/authority",
    component: Layout,
    redirect: "/authority/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/authority/index.vue"),
        name: "Authority",
        meta: {
          title: "权限管理",
          svgIcon: "authority",
        }
      }
    ]
  },
  {
    path: "/advertisement",
    component: Layout,
    redirect: "/advertisement/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/advertisement/index.vue"),
        name: "Advertisement",
        meta: {
          title: "广告管理",
          svgIcon: "advertisement",
        }
      }
    ]
  },
  {
    path: "/integral",
    component: Layout,
    redirect: "/integral/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/integral/index.vue"),
        name: "Integral",
        meta: {
          title: "积分管理",
          svgIcon: "integral",
        }
      }
    ]
  },
  {
    path: "/messageBoard",
    component: Layout,
    redirect: "/messageBoard/index",
    children: [
      {
        path: "index",
        component: () => import("@/views/messageBoard/index.vue"),
        name: "MessageBoard",
        meta: {
          title: "留言板管理",
          svgIcon: "messageBoard",
        }
      }
    ]
  },
]
/**
 * 动态路由
 * 用来放置有权限 (Roles 属性) 的路由
 * 必须带有 Name 属性
 */
export const asyncRoutes: RouteRecordRaw[] = [
  {
    path: "/permission",
    component: Layout,
    redirect: "/permission/page",
    name: "Permission",
    meta: {
      title: "权限管理",
      svgIcon: "lock",
      roles: ["admin", "editor"], // 可以在根路由中设置角色
      alwaysShow: true // 将始终显示根菜单
    },
    children: [
      {
        path: "page",
        component: () => import("@/views/permission/page.vue"),
        name: "PagePermission",
        meta: {
          title: "页面权限",
          roles: ["admin"] // 或者在子导航中设置角色
        }
      },
      {
        path: "directive",
        component: () => import("@/views/permission/directive.vue"),
        name: "DirectivePermission",
        meta: {
          title: "指令权限" // 如果未设置角色，则表示：该页面不需要权限，但会继承根路由的角色
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*", // Must put the 'ErrorPage' route at the end, 必须将 'ErrorPage' 路由放在最后
    redirect: "/404",
    name: "ErrorPage",
    meta: {
      hidden: true
    }
  }
]
const router = createRouter({
  history: createWebHashHistory('/'),
  routes: constantRoutes
})
/** 重置路由 */
export function resetRouter() {
  // 注意：所有动态路由路由必须带有 Name 属性，否则可能会不能完全重置干净
  try {
    router.getRoutes().forEach((route) => {
      const { name, meta } = route
      if (name && meta.roles?.length) {
        router.hasRoute(name) && router.removeRoute(name)
      }
    })
  } catch (error) {
    // 强制刷新浏览器也行，只是交互体验不是很好
    window.location.reload()
  }
}
export default router
