import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Back from "@/components/back";
// 高德地图
import "./plugin/aMap";

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 定义全局组件--头部导航
Vue.component("headerBack", Back)




Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
