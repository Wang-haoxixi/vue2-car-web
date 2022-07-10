<!--
 * @Description: 地图组件
 * @Author: wanghao
 * @Date: 2022-06-24 00:31:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-10 18:43:56
-->
<template>
  <div id="index">
    <!-- vid:地图容器节点的ID -->
    <el-amap class="aMapBox" vid="aMapBox" :events="events" :amapManager="amapManager" :zoom="zoom" :center="center">
      <!-- 覆盖物-圆⚪ -->
      <el-amap-circle v-for="(circle, index) in circles" :key="index + 2" :events="circle.events" :center="circle.center" :radius="circle.radius" :fillColor="circle.fillColor" :strokeColor="circle.strokeColor" :strokeOpacity="circle.strokeOpacity" :strokeWeight="circle.strokeWeight"></el-amap-circle>
      <!-- 覆盖物-点标记 -->
      <el-amap-marker v-for="(marker, index) in parkingMarkers" :key="marker.id + index" :offset="marker.offset" :content="marker.content" :position="marker.position"></el-amap-marker>
      <!-- 车辆数 -->
      <el-amap-marker v-for="(item) in parkingCarNumber" :key="item.lnglat" :offset="item.offsetText" :content="item.text" :position="item.position" :events="item.events" :extData="item"></el-amap-marker>
      <!-- 停车场信息 -->
      <el-amap-marker v-for="(item,index) in parkingInfo" :key="index" :offset="item.offsetInfo" :content="item.info" :position="item.position"></el-amap-marker>
    </el-amap>
  </div>
</template>

<script>
  // 在定制化程度较高的项目中，开发者可能只想通过 vue-amap 引入高德地图，而部分实例化的操作直接基于高德地图的 sdk 完成。这个时候就需要 lazyAMapApiLoaderInstance。
  import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
  import { selfLocation } from "./location";
  import { toWalking } from "./walking";
  // 点标记样式
  import style from "./parkingInfo";
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
        zoom: 18, // 地图初始化缩放级别
        center: [0, 0], // 地图中心点坐标值
        // 自身经度
        self_lng: "",
        // 自身纬度
        self_lat: "",
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
              // 初始化地图
              _this.initMap();
            })
          },
        },
        // 圆
        circles: [{
          events: {
            init (obj) {
              // 注册点击事件
              obj.on("click", _this.handleClick);
            }
          },
          // center: [106.636969, 30.479522], // 圆心位置
          center: [0, 0], // 圆心位置
          radius: "4", // 圆半径，单位:米
          fillColor: "#393e46", // 圆形填充颜色,使用16进制颜色代码赋值。默认值为#006600
          strokeColor: "#393e46", // 线条颜色，使用16进制颜色代码赋值。默认值为#006600
          strokeOpacity: "0.2", // 轮廓线透明度，取值范围[0,1]，0表示完全透明，1表示不透明。默认为0.9
          strokeWeight: 0, // 轮廓线宽度 目前用0-30
        }],
        // 点标记
        parkingMarkers: [{
            id: 1,
            position: [106.503078, 29.589716],
            content: "<img src='" + require('@/assets/images/parking_location_img.png') + "' />",
            offset: [-35, -63],
          },
          {
            id: 2,
            position: [106.703078, 29.589716],
            content: "<img src='" + require('@/assets/images/parking_location_img.png') + "' />",
            offset: [-35, -63],
          },
        ],
        // 停车场车辆数
        parkingCarNumber: [],

        // 停车场信息
        parkingInfo: [],

        // 停车场数据
        parkingBase: {},

        // 定时器
        timer: null,
      }
    },

    methods: {
      // 初始化地图
      initMap () {
        const self = this;
        // console.log('init...')

        // 获取地图的实例
        this.map = aMapManager.getMap();

        // 地图初始化完成时回调
        this.$emit("loadMap");

        // 自身定位
        this.toLocation();

        // 设置点标记实例
        // let marker = new AMap.Marker({
        //   position: [106.636969, 30.479522],
        // });
        // 将点标记实例挂载到地图上
        // marker.setMap(this.map);
      },

      // 定位成功的回调
      locationSuccess (data) {
        console.log('locationSuccess...')
        this.self_lng = data.position.lng;
        this.self_lat = data.position.lat;
        // 设置定位结果
        this.circles[0].center = [this.self_lng, this.self_lat];
        // 加载圆特效
        this.loadCircleSpecific();
      },

      // 定位出错的回调
      locationError (error) {
        console.log('locationError...')
      },

      // 自身定位
      toLocation () {
        selfLocation({
          map: this.map,
          locationSuccess: this.locationSuccess,
          locationError: this.locationError,
        })
      },

      /**
       * @description: 圆特效
       */
      loadCircleSpecific () {
        // 重置定时器
        clearInterval(this.timer);
        let value = 0;
        // 设置定时器
        this.timer = setInterval(() => {
          value += 1;
          if (value > 30) value = 0;
          this.circles[0].strokeWeight = value;
        }, 50);
      },

      /**
       * @description: 圆点击事件
       */
      handleClick () {
        // console.log("handleClick...")
      },

      /**
       * @description: 停车场数据
       */
      parkingData (data) {
        // console.log(1111111, data)
        this.parkingMarkers = data;
        this.parkingCarNumber = data;
      },

      /**
       * @description: 步行导航
       */
      handleWalking (lngLat) {
        const params = {
          map: this.map, // 地图实例
          location_start: [this.self_lng, this.self_lat], // 起点 即当前定位的圆点坐标
          location_end: lngLat, // 终点
          // 步行导航成功的回调
          walkingSuccess: (result) => this.walkingSuccess(result),
          // 步行导航失败的回调
          walkingError: (result) => this.walkingError(result),
        }
        // 调用高德步行导航
        toWalking(params);
      },

      // 步行导航成功的回调
      walkingSuccess (result) {
        console.log("Walking Success")
        this.parkingInfo = [{
          position: this.parkingBase.lnglat.split(","),
          offsetInfo: [-25, -57],
          info: `<div style="${style.parkingInfoWarp}"><span style="${style.parkingInfoNumber}">${this.parkingBase.carsNumber}</span>辆车<span style="${style.parkingInfoLine}"></span>车辆距离您 ${result.routes[0].distance} 米</div>`,
        }]
      },

      // 步行导航失败的回调
      walkingError (result) {
        console.log("Walking Error")
      },

      /**
       * @description: 存储停车场数据
       */
      saveParkingData (res) {
        if (res.key) this.parkingBase = res.value;
      },
    },

    mounted () {
      // 高德地图改版后需要加上安全密钥
      window._AMapSecurityConfig = {
        securityJsCode: '0375d68d1d64fd3dd8bf18843f68f2bc',
      };
      // 项目加载完毕后再调用原生SDK
      // lazyAMapApiLoaderInstance.load().then(() => {
      //   this.map = new AMap.Map('aMapBox', {
      //     center: this.center,
      //     zoom: this.zoom, // 初始化地图层级
      //   });
      // });
    },

    watch: {
      // 仓库isLocation状态值改变即进行定位操作
      "$store.state.location.isLocation": {
        handler () {
          // 自身定位
          this.toLocation();
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  #index {
    height: 100vh;
  }
</style>