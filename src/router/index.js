/*
 * @Description: 
 * @Author: wh
 * @Date: 2022-06-22 09:15:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 15:43:47
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";
import TestMaps from "../views/test-maps/index.vue";

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
    ],
  },

  /**********************
   * 以下为私人测试内容
   */
  {
    path: "/test-maps", // 测试vue-amap的使用
    name: "TestMaps",
    component: TestMaps,
  },
  {
    path: "/use-plugin-vue-amap",
    name: "UsePluginVueAMap",
    component: () => import("../views/test-maps/使用插件(vue-amap).vue")
  },
  {
    path: "/use-plugin-gaode-sdk",
    name: "UsePluginGaodeSdk",
    component: () => import("../views/test-maps/使用插件(高德Sdk).vue")
  },
  {
    path: "/map-base",
    name: "MapBase",
    component: () => import("../views/test-maps/地图-基础.vue")
  },
  {
    path: "/markers",
    name: "Markers",
    component: () => import("../views/test-maps/点标记.vue")
  },
  {
    path: "/picture-overlay",
    name: "PictureOverlay",
    component: () => import("../views/test-maps/图片覆盖物.vue")
  },
  {
    path: "/circle",
    name: "Circle",
    component: () => import("../views/test-maps/圆⚪.vue")
  },
  {
    path: "/polygon",
    name: "Polygon",
    component: () => import("../views/test-maps/多边形.vue")
  },
  {
    path: "/discounting",
    name: "Discounting",
    component: () => import("../views/test-maps/折线.vue")
  },
  {
    path: "/text",
    name: "Text",
    component: () => import("../views/test-maps/文本.vue")
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
