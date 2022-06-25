<!--
 * @Description: 圆⚪
 * @Author: wh
 * @Date: 2022-06-25 17:57:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 17:58:26
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
          center: [121.5273285, 31.21515044],
          radius: 200,
          fillOpacity: 0.5,
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
    height: 200px;
  }
</style>