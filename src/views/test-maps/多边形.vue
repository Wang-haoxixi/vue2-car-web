<!--
 * @Description: 多边形
 * @Author: wanghao
 * @Date: 2022-06-26 13:09:26
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 15:29:59
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :zoom="zoom" :amap-manager="amapManager" :center="center" ref="map" class="amap-demo">
      <el-amap-polygon v-for="(polygon, index) in polygons" :key="index" :vid="index" :ref="`polygon_${index}`" :fillColor="polygon.fillColor" :fillOpacity="polygon.fillOpacity" :path="polygon.path" :draggable="polygon.draggable" :events="polygon.events"></el-amap-polygon>
    </el-amap>
  </div>
</template>

<script>
  import { AMapManager } from 'vue-amap';
  let amapManager = new AMapManager();
  export default {
    data () {
      return {
        zoom: 15,
        center: [121.5273285, 31.21515044],
        amapManager: amapManager,
        polygons: [{
          fillColor: "#0747A6", // 多边形填充颜色，使用16进制颜色代码赋值，如：#FFAA00
          fillOpacity: "0.5", // 多边形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
          // 多边形轮廓线的节点坐标数组
          path: [
            [121.5273285, 31.21515044],
            [121.5293285, 31.21515044],
            [121.5293285, 31.21915044],
            [121.5273285, 31.21515044]
          ],
          draggable: true, // 设置多边形是否可拖拽移动，默认为false
          events: {
            click: () => {
              alert('click polygon');
              console.log(amapManager.getComponent(0));
              console.log(this.$refs.map.$$getCenter())
              console.log(this.$refs.polygon_0[0].$$getPath())
            }
          }
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 100vh;
  }
</style>