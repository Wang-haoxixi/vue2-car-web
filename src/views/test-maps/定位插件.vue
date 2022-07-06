<!--
 * @Description: Geolocation定位服务插件
 * @Author: wh
 * @Date: 2022-07-06 16:52:19
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 17:09:29
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center" :zoom="zoom"></el-amap>

    <div class="toolbar">
      <span v-if="loaded">
        location: lng = {{ lng }} lat = {{ lat }}
      </span>
      <span v-else>正在定位</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      let self = this; // 改变this指向
      return {
        zoom: 14, // 层级
        center: [121.59996, 31.197646], // 地图中心坐标
        lng: 0, // 经度
        lat: 0, // 纬度
        loaded: false, // 定位加载状态
        plugin: [{
          pName: 'Geolocation',
          events: {
            init (o) {
              console.log("o", o)
              // o 是高德地图定位插件实例(用户可以通过两种获得定位的成败和结果，一种是在 getCurrentPosition 的时候传入回调函数来处理定位结果，一种是通过事件监听来取得定位结果)
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
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
    height: 50vh;
  }
</style>