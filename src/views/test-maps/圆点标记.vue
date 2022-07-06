<!--
 * @Description: 覆盖物 - 圆点标记
 * @Author: wh
 * @Date: 2022-07-06 14:02:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 14:06:22
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-circle-marker v-for="(marker, index) in markers" :key="index" :center="marker.center" :radius="marker.radius" :fill-color="marker.fillColor" :fill-opacity="marker.fillOpacity" :events="marker.events"></el-amap-circle-marker>
    </el-amap>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 12,
        center: [121.5273285, 31.21515044],
        markers: [{
          center: [121.5273285, 31.21515044], //圆心位置
          radius: 20, //圆点半径，单位:px
          fillOpacity: 1, //圆形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为 0.9
          fillColor: 'rgba(0,0,255,1)', //圆形填充颜色,使用16进制颜色代码赋值。默认值为 #006600
          events: { //事件
            click: () => {
              alert('click');
            }
          }
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amap-page-container {
    height: 100vh;
  }
</style>