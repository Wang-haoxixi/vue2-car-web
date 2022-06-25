<!--
 * @Description: 点标记
 * @Author: wh
 * @Date: 2022-06-25 16:35:33
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 17:05:15
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-marker v-for="(marker, index) in markers" :key="index" :position="marker.position" :events="marker.events" :visible="marker.visible" :draggable="marker.draggable" :vid="index"></el-amap-marker>
    </el-amap>
    <div class="toolbar">
      <button type="button" name="button" v-on:click="toggleVisible">切换点标记显隐</button>
      <button type="button" name="button" v-on:click="changePosition">改变标记位置</button>
      <button type="button" name="button" v-on:click="chnageDraggle">点标记是否可拖拽?</button>
      <button type="button" name="button" v-on:click="addMarker">添加标记</button>
      <button type="button" name="button" v-on:click="removeMarker">移除标记</button>
    </div>
  </div>
</template>

<script>
  const exampleComponents = {
    props: ['text'],
    template: `<div>text from  parent: {{ text }}</div>`
  }
  export default {
    name: 'amap-page',
    data () {
      return {
        zoom: 14,
        center: [121.5273285, 31.21515044],
        markers: [{
          position: [121.5273285, 31.21515044],
          events: {
            // 点击点标记时触发
            click: () => {
              console.log('click marker');
            },
            // 点标记拖拽移动结束触发事件
            dragend: (e) => {
              console.log('---event---: dragend')
              this.markers[0].position = [e.lnglat.lng, e.lnglat.lat];
            }
          },
          visible: true,
          draggable: false,
          template: '<span>1</span>',
        }],
      };
    },
    methods: {
      // 切换点标记显隐
      toggleVisible () {
        let visableVar = this.markers[0].visible;
        this.markers[0].visible = !visableVar;
      },
      // 改变标记位置
      changePosition () {
        let position = this.markers[0].position;
        this.markers[0].position = [position[0] + 0.002, position[1] - 0.002];
      },
      // 点标记是否可拖拽
      chnageDraggle () {
        let draggable = this.markers[0].draggable;
        this.markers[0].draggable = !draggable;
      },
      // 增加标记
      addMarker () {
        let marker = {
          position: [121.5273285 + (Math.random() - 0.5) * 0.02, 31.21515044 + (Math.random() - 0.5) * 0.02]
        };
        this.markers.push(marker);
      },
      // 移除标记
      removeMarker () {
        if (!this.markers.length) return;
        this.markers.splice(this.markers.length - 1, 1);
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 300px;
  }
</style>