<!--
 * @Description: 比例尺插件。位于地图右下角，用户可控制其显示与隐藏。
 * @Author: wh
 * @Date: 2022-07-06 16:40:47
 * @LastEditors: 
 * @LastEditTime: 2022-07-06 16:41:23
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
          pName: 'Scale',
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