<!--
 * @Description: 地图类型切换插件，用来切换固定的几个常用图层
 * @Author: wh
 * @Date: 2022-07-06 16:28:51
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 16:34:28
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
          pName: 'MapType',
          defaultType: 0,
          events: {
            // 高德插件实例
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