<!--
 * @Description: 地图-基础
 * @Author: wh
 * @Date: 2022-06-25 15:39:25
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 16:32:55
-->
<template>
  <div class="amap-page-container">
    <el-amap ref="map" vid="amapDemo" :amap-manager="amapManager" :center="center" :zoom="zoom" :plugin="plugin" :events="events" class="amap-demo"></el-amap>

    <div class="toolbar">
      <button @click="getMap">获取地图实例</button>
    </div>
  </div>
</template>

<script>
  import { AMapManager } from 'vue-amap';
  let amapManager = new AMapManager();
  export default {
    data: function() {
      return {
        amapManager, // amap 管理器
        zoom: 12, // 层级
        center: [121.59996, 31.197646],
        events: {
          init: (o) => {
            // console.log(o.getCenter())
            // console.log(this.$refs.map.$$getInstance()) // 获取地图实例
            o.getCity(result => { // 获取地图当前行政区
              // console.log(result)
            })
          },
          /**
           * 各种事件注册
           */
          // 停止拖拽地图后触发
          'moveend': () => { console.log('moveend...') },
          // 地图层级改变时触发
          'zoomchange': () => { console.log('zoomchange...') },
          // 地图被点击时触发
          'click': (e) => { console.log('map clicked...') },
        },
        plugin: [
          // 工具栏
          'ToolBar',
          {
            pName: 'MapType', // 地图类型
            defaultType: 0,
            events: {
              init (o) {
                // o MapType的实例
                console.log(o);
              }
            }
          }
        ]
      };
    },
    mounted () {
      // 高德地图改版后需要加上安全密钥
      window._AMapSecurityConfig = {
        securityJsCode: '0375d68d1d64fd3dd8bf18843f68f2bc',
      };
    },
    methods: {
      getMap () {
        // amap manage 
        console.log(amapManager)
        // amap vue component
        // console.log(amapManager._componentMap);
        // gaode map instance
        // console.log(amapManager._map);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 300px;
  }
</style>