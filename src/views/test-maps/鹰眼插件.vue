<!--
 * @Description: 地图鹰眼插件。
 * @Author: wh
 * @Date: 2022-07-06 16:35:19
 * @LastEditors: 
 * @LastEditTime: 2022-07-06 16:35:46
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
          pName: 'OverView',
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