<!--
 * @Description: 覆盖物 - 文本
 * @Author: wanghao
 * @Date: 2022-06-26 15:37:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 10:43:54
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-text v-for="(text, index) in texts" :key="index" :text="text.text" :offset="text.offset" :position="text.position" :cursor="text.cursor" :title="text.title" :events="text.events"></el-amap-text>
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
          text: '覆盖物-文本~', // 标记显示的文本内容
          offset: [0, 0], // 点标记显示位置偏移量，默认值为Pixel(-10,-34)。
          cursor: "help", // 指定鼠标悬停时的鼠标样式，自定义cursor，IE仅支持cur/ani/ico格式，Opera不支持自定义cursor (help-帮助样式)
          animation: "AMAP_ANIMATION_BOUNCE", // 点标记的动画效果，默认值：“AMAP_ANIMATION_NONE” 可选值： “AMAP_ANIMATION_NONE”，无动画效果 “AMAP_ANIMATION_DROP”，点标掉落效果 “AMAP_ANIMATION_BOUNCE”，点标弹跳效果
          title: "我路过..", // 鼠标滑过点标记时的文字提示，不设置则鼠标滑过点标无文字提示
          events: { // 事件
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