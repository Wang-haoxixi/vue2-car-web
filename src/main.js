/*
 * @Description: 
 * @Author: wh
 * @Date: 2022-06-22 09:15:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-09 15:27:07
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Back from "@/components/back";
// 高德地图
import "./plugin/aMap";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 引入formCreate
import formCreate from '@form-create/element-ui';

// 引入xlsx-style
// import xlsxStyle from 'xlsx-style';
// Vue.use(xlsxStyle);

// 引入avue
import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
import axios from 'axios'
Vue.use(Avue, { axios });

// 注册插件
Vue.use(formCreate);

Vue.use(ElementUI);

// 定义全局组件--头部导航
Vue.component("headerBack", Back)




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");