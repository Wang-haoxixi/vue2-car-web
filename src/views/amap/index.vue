<template>
  <div id="index">
    <!-- vid:地图容器节点的ID -->
    <el-amap class="aMapBox" vid="aMapBox" :events="events" :amapManager="amapManager" :zoom="zoom" :center="center"></el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
const aMapManager = new AMapManager();
console.log("aMapManager: ", aMapManager);
export default {
  name: "Amap",
  data() {
    // 改变this指向
    const _this = this;
    return {
      map: null,
      // 地图管理对象
      amapManager: aMapManager,
      zoom: 16, // 地图初始化缩放级别
      center: [106.636969, 30.479522], // 地图中心点坐标值
      // 事件
      events: {
        /**
         * @description: 初始化地图后可获取到地图的实例 (用了init后，可以在方法中直接用高德原生api了)
         * @param {Object} e 地图实例
         */
        init(e) {
          console.log('e: ', e);
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
    initMap() {
      console.log('init...')
      this.map = aMapManager.getMap();
      // 设置点标记实例
      let marker = new AMap.Marker({
        position: [106.636969, 30.479522],
      });
      // 将点标记实例挂载到地图上
      marker.setMap(this.map);
    }
  },

  mounted() {
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