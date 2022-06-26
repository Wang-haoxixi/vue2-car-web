<!--
 * @Description: 圆⚪
 * @Author: wh
 * @Date: 2022-06-25 17:57:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 12:56:34
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-circle v-for="(circle, index) in circles" :key="index" :center="circle.center" :radius="circle.radius" :fill-opacity="circle.fillOpacity" :events="circle.events"></el-amap-circle>
    </el-amap>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 15,
        center: [121.5273285, 31.21515044],
        circles: [{
          center: [121.5273285, 31.21515044], // 圆心位置
          radius: 200, // 圆半径，单位:米
          fillOpacity: 0.5, // 圆形填充透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
          events: {
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