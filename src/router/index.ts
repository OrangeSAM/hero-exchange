import { createRouter, createWebHistory } from "vue-router";
import My from "../views/my.vue";
import List from "../views/list.vue";
import Publish from "../views/publish.vue";

const router = createRouter({
  history: createWebHistory("/"),
  routes: [
    {
      path: "/", // 首页
      name: "publish",
      component: Publish,
      meta: {
        needAuth: true,
      },
    },
    {
      path: "/publish",
      redirect: "/",
    },
    {
      path: "/my", // 我的
      name: "my",
      component: My,
      meta: {
        needAuth: true,
      },
    },
    {
      path: "/list", // 列表
      name: "list",
      component: List,
      meta: {
        needAuth: true,
      },
    },

    {
      path: "/:pathMatch(.*)*", // Vue Router 4的通配符语法
      name: "NotFound",
      component: Publish,
    },
  ],
});

export default router;
