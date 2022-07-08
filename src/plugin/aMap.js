/*
 * @Description: 
 * @Author: wanghao
 * @Date: 2022-04-23 22:48:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-07 22:31:53
 */
import Vue from "vue";
// 高德离线地图
import VueAMap from 'vue-amap';
Vue.use(VueAMap);

// vue-amap 的初始化
VueAMap.initAMapApiLoader({
  // 高德key
  key: 'e6aa0bb5ca2603a1052d423b96aaef83', // 自己到官网申请，我随便写的
  // 插件集合 （插件按需引入） 全局引入地图插件 (使用插件之前一定要初始化，否则会报错！)   
  // plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.MarkerClusterer'],
  // 'AMap.Walking'步行路线规划
  plugin: ['AMap.Geolocation', 'AMap.ToolBar', 'AMap.MapType', 'AMap.OverView', 'AMap.Scale', 'AMap.MarkerClusterer', 'AMap.Walking'],
  v: '1.4.15', // 我也不知道为什么要写这个，不写项目会报错，而且我随便写的，跟我下载的版本对应不了
  uiVersion: '1.0.11' // ui版本号，也是需要写
})