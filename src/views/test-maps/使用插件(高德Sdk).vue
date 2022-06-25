<!--
 * @Description: 使用高德原生Sdk进行点标记的创建
 * @Author: wh
 * @Date: 2022-06-25 15:30:46
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 15:36:13
-->
<template>
  <div id="amap-demo1" class="amap-demo"></div>
</template>

<script>
  import { lazyAMapApiLoaderInstance } from 'vue-amap';
  const loadPromise = lazyAMapApiLoaderInstance.load()
  export default {
    data () {
      return {
        map: null
      }
    },
    mounted () {
      loadPromise.then(() => {
        console.log('-----')
        this.map = new AMap.Map('amap-demo1', {
          center: [106.636969, 30.479522],
          zoom: 12
        })
        AMapUI.loadUI(['overlay/SimpleMarker'], (SimpleMarker) => {
          const marker = new SimpleMarker({
            iconLabel: 'A',
            iconStyle: 'red',
            map: this.map,
            position: this.map.getCenter()
          });
        });
      })
    }
  }
</script>

<style lang="scss" scoped>
  #amap-demo1 {
    height: 300px;
  }
</style>