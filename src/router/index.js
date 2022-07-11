/*
 * @Description: 
 * @Author: wh
 * @Date: 2022-06-22 09:15:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-11 16:07:05
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/index/index.vue";
import TestMaps from "../views/test-maps/index.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    children: [{
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
  // vue-amap 组件测试
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
  {
    path: "/bezier",
    name: "Bezier",
    component: () => import("../views/test-maps/贝塞尔曲线.vue")
  },
  {
    path: "/circle-marker",
    name: "CircleMarker",
    component: () => import("../views/test-maps/圆点标记.vue")
  },
  {
    path: "/ellipse",
    name: "Ellipse",
    component: () => import("../views/test-maps/椭圆.vue")
  },
  {
    path: "/info-window",
    name: "InfoWindow",
    component: () => import("../views/test-maps/信息窗体.vue")
  },
  {
    path: "/search-box",
    name: "SearchBox",
    component: () => import("../views/test-maps/搜索组件.vue")
  },

  {
    path: "/handbook",
    name: "Handbook", // 插件使用指南
    component: () => import("../views/test-maps/插件使用指南.vue")
  },
  {
    path: "/plugin-type",
    name: "PluginType",
    component: () => import("../views/test-maps/类型插件.vue")
  },
  {
    path: "/plugin-eye",
    name: "PluginEye",
    component: () => import("../views/test-maps/鹰眼插件.vue")
  },
  {
    path: "/plugin-scale",
    name: "PluginScale",
    component: () => import("../views/test-maps/比例尺插件.vue")
  },
  {
    path: "/plugin-toolBar",
    name: "PluginToolBar",
    component: () => import("../views/test-maps/工具条插件.vue")
  },
  {
    path: "/plugin-location",
    name: "PluginLocation",
    component: () => import("../views/test-maps/定位插件.vue")
  },

  {
    path: "/custom-component-handbook",
    name: "CustomComponentHandbook", // 自定义组件指南
    component: () => import("../views/test-maps/自定义组件指南.vue")
  },

  {
    path: "/aggregate",
    name: "Aggregate", // 点坐标 - 聚合
    component: () => import("../views/test-maps/点坐标(聚合).vue")
  },

  // grid宫格
  {
    path: "/css-grid-fr",
    name: "CssGridFr", // fr单位
    component: () => import("../views/test-css/grid-fr.vue")
  },
  {
    path: "/css-grid-repeat",
    name: "CssGridRepeat", // repeat()函数
    component: () => import("../views/test-css/grid-repeat.vue")
  },
  {
    path: "/css-grid-gap",
    name: "CssGridGap", // gap属性
    component: () => import("../views/test-css/grid-gap.vue")
  },

  // formCreate 
  // form-create 是一个可以通过 JSON 生成具有动态渲染、数据收集、验证和提交功能的表单生成组件
  {
    path: "/form-create-test",
    name: "FormCreateTest", // <form-create></form-create>组件模式
    component: () => import("../views/form-create")
  },
  {
    path: "/vue-prototype-methods",
    name: "Vue 原型方法.vue", // vue 原型方法
    component: () => import("../views/form-create/vue 原型方法.vue")
  },
  {
    path: "/win-methods",
    name: "window全局方法", // window全局方法
    component: () => import("../views/form-create/window全局方法.vue")
  },
  {
    path: "/input",
    name: "Input 输入框", // Input 输入框
    component: () => import("../views/form-create/Input 输入框.vue")
  },

  // avue
  {
    path: "/avue",
    name: "Avue", // $DialogForm弹窗表单
    component: () => import("../views/avue")
  },
  {
    path: "/clipboard",
    name: "$Clipboard", // $Clipboard复制到剪切板
    component: () => import("../views/avue/$Clipboard复制到剪切板.vue")
  },
  {
    path: "/imagePreview",
    name: "$ImagePreview", // $ImagePreview图片预览
    component: () => import("../views/avue/$ImagePreview图片预览.vue")
  },
  {
    path: "/exportExcel",
    name: "$ExportExcel", // $ExportExcel导出
    component: () => import("../views/avue/$ExportExcel导出.vue")
  },
  {
    path: "/log",
    name: "$Log", // $Log日志打印
    component: () => import("../views/avue/$Log日志打印.vue")
  },
  {
    path: "/watermark",
    name: "Watermark", // watermark全局水印
    component: () => import("../views/avue/watermark全局水印.vue")
  },
  {
    path: "/downFile",
    name: "DownFile", // downFile文件下载
    component: () => import("../views/avue/downFile文件下载.vue")
  },
  {
    path: "/validatenull",
    name: "Validatenull", // validatenull判断空
    component: () => import("../views/avue/validatenull判断空.vue")
  },

  // avue components
  {
    path: "/avue-input",
    name: "AvueInput", // avue-input输入框
    component: () => import("../views/avue/components/avue-input")
  },
  {
    path: "/avue-inputTree",
    name: "AvueInputTree", // inputTree树型组件
    component: () => import("../views/avue/components/avue-inputTree.vue")
  },
  {
    path: "/avue-inputNumber",
    name: "AvueInputNumber", // inputNumber数字框
    component: () => import("../views/avue/components/avue-inputNumber.vue")
  },
  {
    path: "/avue-inputColor",
    name: "AvueInputColor", // inputColor颜色选择器
    component: () => import("../views/avue/components/avue-inputColor.vue")
  },
  {
    path: "/avue-inputIcon",
    name: "AvueInputIcon", // inputIcon图标选择器(远程)
    component: () => import("../views/avue/components/avue-inputIcon.vue")
  },
  {
    path: "/avue-inputMap",
    name: "AvueInputMap", // inputMap地图选择器(返回经纬度和详细地址)
    component: () => import("../views/avue/components/avue-inputMap.vue")
  },
  {
    path: "/avue-inputTabel",
    name: "AvueInputTabel", // inputTabel表格选择器
    component: () => import("../views/avue/components/avue-inputTabel.vue")
  },
  {
    path: "/avue-inputArray",
    name: "AvueInputArray", // array 数组输入框
    component: () => import("../views/avue/components/avue-inputArray.vue")
  },
  {
    path: "/avue-date",
    name: "AvueDate", // date 日期
    component: () => import("../views/avue/components/avue-date.vue")
  },

  // CRUD组件
  {
    path: "/avue-crud-base",
    name: "AvueCrudBase", // CRUD - base基础
    component: () => import("../views/avue/CRUD组件/base.vue")
  },
  {
    path: "/avue-crud-page",
    name: "AvueCrudPage", // CRUD - page分页测试
    component: () => import("../views/avue/CRUD组件/page.vue")
  },
  {
    path: "/avue-crud-search",
    name: "AvueCrudSearch", // CRUD - search搜索
    component: () => import("../views/avue/CRUD组件/search.vue")
  },
  {
    path: "/avue-crud-import-and-export",
    name: "AvueCrudImportAndExport", // CRUD - 表格导入导出
    component: () => import("../views/avue/CRUD组件/import-and-export.vue")
  },
  {
    path: "/avue-crud-big-table",
    name: "AvueCrudBigTable", // CRUD - 大表哥 (最全avue表格配置!!!)
    component: () => import("../views/avue/CRUD组件/big-table.vue")
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