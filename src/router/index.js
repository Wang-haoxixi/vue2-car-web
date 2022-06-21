import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/user", //会员中心
        name: "User",
        component: () => import("../views/user/index.vue")
      },
      {
        path: "/safe", //安全设置
        name: "Safe",
        component: () => import("../views/safe/index.vue")
      },
      {
        path: "/password", //修改登录密码
        name: "Password",
        component: () => import("../views/password/index.vue")
      }
    ]
  },
];
const router = new VueRouter({
  // 路由模式：hash(默认)，history模式
  mode: "hash",
  // 修改路由高亮样式名，默认值为'router-link-active' 自定义高亮名称，导航高亮的样式名称：.active
  // linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes,
});

export default router;
