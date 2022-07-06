<!--
 * @Description: 地图工具条插件，可以用来控制地图的缩放和平移。
 * @Author: wh
 * @Date: 2022-07-06 16:44:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 16:51:45
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :plugin="plugin" class="amap-demo">
    </el-amap>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        plugin: [{
          pName: 'ToolBar',
          // position: '', // 控件停靠位置 LT:左上角; RT:右上角; LB:左下角; RB:右下角; 默认位置：LT
          liteStyle: true, // 是否使用精简模式，默认为false (精简模式控件位于右下角，普通模式控件位于左上角)
          events: {
            init (instance) {
              console.log(instance);
            }
          }
        }]
      };
    }
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 50vh;
  }
</style>