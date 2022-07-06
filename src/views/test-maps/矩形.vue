<!--
 * @Description: 覆盖物 - 矩形
 * @Author: wh
 * @Date: 2022-07-06 14:12:22
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 14:39:39
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-rectangle v-for="(retangle, index) in retangles" :key="index" :events="retangle.events" :center="retangle.center" :bounds="retangle.bounds" :fill-color="retangle.fillColor" :fill-opacity="retangle.fillOpacity"></el-amap-rectangle>
    </el-amap>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 12,
        center: [121.5273285, 31.21515044],
        retangles: [{
          center: [121.5273285, 31.21515044], //矩形中心
          bounds: [ //矩形的范围
            [121.5273285, 31.21515044],
            [121.7276285, 31.24545044]
          ],
          fillOpacity: 0.7, //矩形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
          fillColor: '#ffffff', //圆形填充颜色,使用16进制颜色代码赋值。默认值为#006600
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