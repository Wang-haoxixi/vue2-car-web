<!--
 * @Description: 
 * @Author: wanghao
 * @Date: 2022-06-24 00:31:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 00:12:00
-->
<template>
  <div id="index">
    <!-- vid:地图容器节点的ID -->
    <el-amap class="aMapBox" vid="aMapBox" :events="events" :amapManager="amapManager" :zoom="zoom" :center="center">
      <el-amap-circle :center="center" :radius="3" fillColor="#393e46" strokeColor="#393e46" strokeOpacity="0.2" strokeWeight="20"></el-amap-circle>
    </el-amap>
  </div>
</template>

<script>
  import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
  const aMapManager = new AMapManager();
  export default {
    name: "Amap",
    data () {
      // 改变this指向
      const _this = this;
      return {
        map: null,
        // 地图管理对象
        amapManager: aMapManager,
        zoom: 19, // 地图初始化缩放级别
        center: [106.636969, 30.479522], // 地图中心点坐标值
        // 事件
        events: {
          /**
           * @description: 初始化地图后可获取到地图的实例 (用了init后，可以在方法中直接用高德原生api了)
           * @param {Object} e 地图实例
           */
          init (e) {
            // console.log('e: ', e);
            // 地图加载完毕后调用 异步调用
            lazyAMapApiLoaderInstance.load().then(() => {
              _this.initMap();
            })
          },
        },
      }
    },

    methods: {
      // 初始化地图
      initMap () {
        const self = this;
        // console.log('init...')
        // 获取地图的实例
        this.map = aMapManager.getMap();
        // 设置点标记实例
        // let marker = new AMap.Marker({
        //   position: [106.636969, 30.479522],
        // });
        // 将点标记实例挂载到地图上
        // marker.setMap(this.map);

        /**
         * 浏览器定位
         */
        // AMap.Geolocation 构造函数，创建浏览器定位实例
        var geolocation = new AMap.Geolocation({
          enableHighAccuracy: true, //是否使用高精度定位，默认:true
          timeout: 10000, //超过10秒后停止定位，默认：5s
          // buttonPosition: 'RB', //定位按钮的停靠位置
          showButton: false, //显示定位按钮，默认：true
          zoomToAccuracy: true, //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
          showMarker: true, //定位成功后在定位到的位置显示点标记，默认：true
          showCircle: false, //定位成功后用圆圈表示定位精度范围，默认：true
          panToLocation: true, //定位成功后将定位到的位置作为地图中心点，默认：true
          markerOptions: { //定位点Marker的配置，不设置该属性则使用默认Marker样式
            content: " ",
          }
        });
        // 向地图的控件中放入定位实例对象
        this.map.addControl(geolocation);
        geolocation.getCurrentPosition(function(status, result) {
          console.log(status, result)
          if (status == 'complete') {
            console.log(111)
            self.center = [result.position.lng, result.position.lat]
          } else {
            console.log(222)
          }
        });

      }
    },

    mounted () {
      window._AMapSecurityConfig = {
        securityJsCode: '0375d68d1d64fd3dd8bf18843f68f2bc',
      }
      // 项目加载完毕后再调用原生SDK
      // lazyAMapApiLoaderInstance.load().then(() => {
      //   this.map = new AMap.Map('aMapBox', {
      //     center: this.center,
      //     zoom: this.zoom, // 初始化地图层级
      //   });
      // });
    },

  }
</script>

<style lang="scss" scoped>
  #index {
    height: 100vh;
  }
</style>