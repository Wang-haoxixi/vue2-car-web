/*
 * @Description: 
 * @Author: wanghao
 * @Date: 2022-04-21 23:49:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 22:27:52
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import location from "./modules/location";
export default new Vuex.Store({
  modules: {
    location
  },
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
});