<!--
 * @Description: 使用vue-amap进行点标记的创建
 * @Author: wh
 * @Date: 2022-06-25 14:46:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 15:35:38
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :center="center" :map-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo"></el-amap>
  </div>
</template>

<script>
  import { AMapManager } from 'vue-amap';
  let amapManager = new AMapManager();
  export default {
    data () {
      return {
        zoom: 12,
        center: [106.636969, 30.479522],
        amapManager,
        events: {
          // 初始化地图后可获取到地图的实例
          init (map) {
            // console.log("center: " + map.getCenter())
            AMapUI.loadUI(['overlay/SimpleMarker'], function(SimpleMarker) {
              const marker = new SimpleMarker({
                iconLabel: 'B',
                iconStyle: 'pink',
                map: map,
                position: map.getCenter(), // 获取当前el-amap的center值
              });
            });
          }
        }
      };
    }
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 300px;
  }
</style>