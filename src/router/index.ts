import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

// 静态路由
const staticRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/layout/Layout.vue'),
  },
]
//
// // 动态路由
// export const dynamicRoutes: RouteRecordRaw[] = [
//   {
//     path: '/',
//     name: 'home',
//     redirect: '/home',
//     component: () => import('@/layout/Layout.vue'),
//     children: [
//       {
//         path: '/home',
//         name: 'home',
//         component: () => import('@/layout/Layout.vue'),
//       },
//     ],
//   },
// ]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...staticRoutes,
    // ...dynamicRoutes,
  ],
})

export default router
