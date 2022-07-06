<!--
 * @Description: 覆盖物 - 贝塞尔曲线
 * @Author: wh
 * @Date: 2022-07-06 10:47:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 13:57:28
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-bezier-curve v-for="(line, index) in lines" :key="index" :events="line.events" :path="line.path" :stroke-color="line.strokeColor" :stroke-style="line.strokeStyle" :stroke-opacity="line.strokeOpacity"></el-amap-bezier-curve>
    </el-amap>
  </div>
</template>

</template>

<script>
  export default {
    data () {
      return {
        zoom: 12, //层级
        center: [116.380298, 39.907771], //地图中心
        lines: [{
          path: [ //贝塞尔曲线的路径
            [116.39, 39.91, 116.37, 39.91],
            [116.380298, 39.907771, 116.38, 39.90],
            [116.385298, 39.907771, 116.40, 39.90]
          ],
          strokeDasharray: [10, 10], //虚线的分段
          strokeColor: "#FF33FF", //线条颜色
          strokeOpacity: 1, //线透明度
          strokeWeight: 3, //线宽
          strokeStyle: "solid", //虚线或者视线
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