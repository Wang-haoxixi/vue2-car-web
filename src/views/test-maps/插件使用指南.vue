<!--
 * @Description: 插件使用指南：插件的两种使用方式
 * @Author: wh
 * @Date: 2022-07-06 15:45:38
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 16:27:03
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :plugin="plugin" class="amap-demo"></el-amap>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        // 插件名支持两种，不带"AMap"前缀，如"MapType",带"AMap"前缀，如"AMap.MapType"。推荐前者。（v0.1.2之前版本，只支持后者）

        // 插件的配置支持两种方式。

        // 1– 默认配置 只配置插件名， 配置则用默认
        // plugins: ['MapType'],

        // 2 – 自定义配置（v0.1.2开始支持）自定义配置对象，pName为插件名。所有属性仅支持初始化配置，不支持响应式。
        plugin: [{
          // 插件名 必填字段
          pName: 'MapType',
          // 地图类型图层(0地图 1卫星图)
          defaultType: 1
        }]
      };
    },
    mounted () {
      // 注意： 高德地图改版后需要加上安全密钥 , 否则 报错 Uncaught Error: INVALID_USER_SCODE 无效的用户范围
      window._AMapSecurityConfig = {
        securityJsCode: '0375d68d1d64fd3dd8bf18843f68f2bc',
      };
    },
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 80vh;
  }
</style>