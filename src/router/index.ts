import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

import NProgress from "nprogress";

const routes: RouteRecordRaw[] = [
  {
    path: "/dashboard",
    meta: {
      title: "控制面板",
    },
    name: "Dashboard",
    component: () => import("@/visual-board/index.vue"),
  },
  {
    path: "/:path(.*)*",
    component: () => import("@/views/redirect/index.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: { title: "登录界面" },
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  NProgress.start();
  return true;
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
