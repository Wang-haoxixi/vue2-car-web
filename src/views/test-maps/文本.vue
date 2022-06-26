<!--
 * @Description: 文本
 * @Author: wanghao
 * @Date: 2022-06-26 15:37:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 15:40:41
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-text v-for="(text, index) in texts" :key="index" :text="text.text" :offset="text.offset" :position="text.position" :events="text.events"></el-amap-text>
    </el-amap>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 15,
        center: [121.5273285, 31.21515044],
        texts: [{
          position: [121.5273285, 31.21515044], // 点标记在地图上显示的位置，默认为地图中心点
          text: 'hello world', // 标记显示的文本内容
          offset: [0, 0], // 点标记显示位置偏移量，默认值为Pixel(-10,-34)。
          events: {
            click: () => {
              alert('click text');
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