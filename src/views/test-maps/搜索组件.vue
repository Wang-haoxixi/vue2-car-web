<!--
 * @Description: 扩展 - 搜索组件
 * @Author: wh
 * @Date: 2022-07-06 15:01:15
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 15:41:04
-->
<template>
  <div class="amap-page-container">
    <el-amap-search-box class="search-box" :search-option="searchOption" :on-search-result="onSearchResult"></el-amap-search-box>
    <el-amap vid="amapDemo" :center="mapCenter" :zoom="12" class="amap-demo">
      <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker"></el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        // 点标记
        markers: [
          [121.59996, 31.197646],
          [121.40018, 31.197622],
          [121.69991, 31.207649]
        ],
        searchOption: { //搜索条件
          // city: '上海', //城市名,默认全国
          citylimit: false, //是否限制城市内搜索,默认false
        },
        mapCenter: [121.59996, 31.197646] // 地图中心
      };
    },
    mounted () {
      // 注意： 高德地图改版后需要加上安全密钥 , 否则 报错 Uncaught Error: INVALID_USER_SCODE 无效的用户范围
      window._AMapSecurityConfig = {
        securityJsCode: '0375d68d1d64fd3dd8bf18843f68f2bc',
      };
    },
    methods: {
      /**
       * @description: 搜索回调函数
       * @param {Object} pois 经纬度对象数组
       */
      onSearchResult (pois) {
        console.log("pois: ", pois)
        // 报错 Uncaught Error: INVALID_USER_SCODE 无效的用户范围
        let lngSum = 0; // 经度
        let latSum = 0; // 纬度
        if (pois.length > 0) {
          pois.forEach(poi => {
            let { lng, lat } = poi;
						// 累加经纬度
            lngSum += lng;
            latSum += lat;
            // 添加点标记
            this.markers.push([poi.lng, poi.lat]);
          });
					// 计算地图中心(通过最终累加的经纬度的和 / 经纬度对象数组的长度 得到平均值即为地图中心坐标)
          let center = {
            lng: lngSum / pois.length,
            lat: latSum / pois.length
          };
          // 设置地图中心
          this.mapCenter = [center.lng, center.lat];
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 80vh;
  }

  .search-box {
    position: absolute;
    top: 25px;
    left: 20px;
  }

  .amap-page-container {
    position: relative;
  }
</style>