<!--
 * @Description: 折线
 * @Author: wanghao
 * @Date: 2022-06-26 15:31:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-26 15:33:56
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-polyline :editable="polyline.editable" :path="polyline.path" :events="polyline.events"></el-amap-polyline>
    </el-amap>

    <div class="toolbar">
      <button type="button" name="button" v-on:click="changeEditable">编辑折线</button>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 12,
        center: [121.5273285, 31.25515044],
        polyline: {
          // 折线的节点坐标数组
          path: [
            [121.5389385, 31.21515044],
            [121.5389385, 31.29615044],
            [121.5273285, 31.21515044]
          ],
          events: {
            click (e) {
              alert('click polyline');
            },
            end: (e) => {
              let newPath = e.target.getPath().map(point => [point.lng, point.lat]);
              console.log(newPath);
            }
          },
          editable: false, // 折线当前是否可编辑
        }
      };
    },
    methods: {
      changeEditable () {
        this.polyline.editable = !this.polyline.editable;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 100vh;
  }
</style>