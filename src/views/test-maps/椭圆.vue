<!--
 * @Description: 覆盖物 - 椭圆
 * @Author: wh
 * @Date: 2022-07-06 14:07:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 14:10:46
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-ellipse v-for="(ellipse, index) in ellipses" :key="index" :events="ellipse.events" :center="ellipse.center" :radius="ellipse.radius"></el-amap-ellipse>
    </el-amap>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 12, // 层级
        center: [121.5273285, 31.21515044],
        ellipses: [{
          center: [121.5273285, 31.21515044], // 圆心位置
          radius: [500, 1000], // 椭圆的半径，用2个元素的数组表示，单位：米 如： radius: [1000, 2000]表示横向半径是1000，纵向的半径是2000 默认值：[1000, 1000]
          events: { // 事件
            click: () => {
              alert('click');
            }
          }
					// ... 其他属性跟圆点标记一致
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