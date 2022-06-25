<!--
 * @Description: 
 * @Author: wh
 * @Date: 2022-06-25 11:57:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 14:34:59
-->
<template>
  <div id="test-maps">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper" id="amap-wrapper">
      <el-amap vid="amapDemo" :center="center" :amap-manager="amapManager" :zoom="zoom" :events="events" class="amap-demo"></el-amap>

      <div class="toolbar">
        <button @click="add()">添加点标记</button>
      </div>
    </div>
  </div>
</template>

<script>
  import { AMapManager, lazyAMapApiLoaderInstance } from 'vue-amap';
  let amapManager = new AMapManager();
  export default {
    data () {
      return {
        msg: 'vue-amap向你问好！',

        zoom: 12,
        center: [121.59996, 31.197646],
        amapManager,
        events: {
          init (o) {
            let marker = new AMap.Marker({
              position: [121.59996, 31.197646]
            });

            marker.setMap(o);
          }
        }
      }
    },
    methods: {
      add () {
        // 获取地图实例
        let o = amapManager.getMap();
        // 创建点标记实例对象
        let marker = new AMap.Marker({
          position: [121.59996, 31.177646]
        });
        // 将点标记实例放入地图实例中
        marker.setMap(o);
      }
    },
    mounted () {
      // 在定制化程度较高的项目中，开发者可能只想通过 vue-amap 引入高德地图，而部分实例化的操作直接基于高德地图的 sdk 完成。这个时候就需要 lazyAMapApiLoaderInstance。
      // lazyAMapApiLoaderInstance.load().then(() => {
      //   // your code ...
      //   this.map = new AMap.Map('amap-wrapper', {
      //     center: new AMap.LngLat(121.59996, 31.197646)
      //   });
      // });
    }
  }
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
  }

  .amap-demo {
    margin: auto;
    width: 600px;
    height: 600px;
  }
</style>