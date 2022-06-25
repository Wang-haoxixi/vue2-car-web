<!--
 * @Description: 图片覆盖物
 * @Author: wh
 * @Date: 2022-06-25 17:10:16
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-06-25 17:54:21
-->
<template>
  <div>
    <div class="amap-page-container">
      <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
        <el-amap-ground-image v-for="(groundimage, index) in groundimages" :key="index" :url="groundimage.url" :clickable="groundimage.clickable" :bounds="groundimage.bounds" :events="groundimage.events"></el-amap-ground-image>
      </el-amap>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 6,
        center: [121.5273285, 31.21515044],
        groundimages: [{
          // 图层是否可点击，若为可点击则GroundImage支持鼠标点击事件,默认值：false
          clickable: true,
          // 图片路径
          url: require("@/assets/images/black-pic-big.png"),
          // 区域
          bounds: [
            [121.5273285, 31.21515044],
            [122.9273285, 32.31515044]
          ],
          // 注册事件 TODO: 事件不生效(不知为啥,待处理)
          events: {
            init (o) {
              // console.log(o)
              o.on('click', () => { console.log(11111111) });
            },
            // 'click': () => console.log('click groundimage'),
            'dblclick': () => console.log('dblclick groundimage'),
          }
        }]
      }
    },
    mounted () {
      // 高德地图改版后需要加上安全密钥
      window._AMapSecurityConfig = {
        securityJsCode: '0375d68d1d64fd3dd8bf18843f68f2bc',
      };
    },
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 300px;
  }
</style>