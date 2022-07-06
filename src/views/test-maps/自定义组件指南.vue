<!--
 * @Description: 通过createCustomComponent自定义组件插件
 * @Author: wh
 * @Date: 2022-07-06 17:11:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 17:23:21
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amapDemo" :zoom="zoom" :center="center" class="amap-demo">
      <amap-canvas-markers :data="markerData" :get-position="markerOptions.getPosition" :get-hover-title="markerOptions.getHoverTitle" :visible="markerOptions.visible" render-constructor="PointSimplifier.Render.Canvas" :render-options="markerOptions.renderOptions" :events="markerOptions.events"></amap-canvas-markers>
    </el-amap>
    <div class="toolbar">
      <button type="button" name="button" @click="toggleVisible">toggle visible</button>
    </div>
  </div>
</template>

<script>
  import { createCustomComponent } from 'vue-amap'
  // 组件定义
  const AmapCanvasMarkers = createCustomComponent({
    name: 'amap-canvas-marker',
    props: [
      'visible',
      'zIndex',
      'data',
      'getPosition',
      'getHoverTitle',
      'compareDataItem',
      'autoSetFitView',
      'renderConstructor',
      'renderOptions',
      'maxChildrenOfQuadNode',
      'maxDepthOfQuadTree',
      'badBoundsAspectRatio'
    ],
    contextReady () {
      console.log('context ready', AMap);
    },
    init (options, map) {
      return new Promise((resolve, reject) => {
        AMapUI.loadUI(['misc/PointSimplifier'], PointSimplifier => {
          const { renderConstructor: renderStr, renderOptions } = options;
          // console.log(renderStr);
          if (renderStr) options.renderConstructor = renderStr.split('.').reduce((pre, cur) => pre[cur], { PointSimplifier });
          if (options.renderOptions && options.renderOptions.pointStyle) {
            const { pointStyle } = options.renderOptions;
            if (pointStyle.contentImg) pointStyle.content = PointSimplifier.Render.Canvas.getImageContent(pointStyle.contentImg, () => this.$amapComponent.renderLater()),
              e => console.error(e)
          }
          resolve(new PointSimplifier(options))
        });
      })
    },
    converters: {},
    handlers: {
      zIndex (index) {
        this.setzIndex(index);
      },
      visible (flag) {
        flag === false ? this.hide() : this.show();
      }
    }
  });
  const center = [121.5273285, 31.21515044];
  const markerData = Array.from({ length: 10000 }, (x, index) => ({
    position: [
      center[0] + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 0.6,
      center[1] + (Math.random() > 0.5 ? 1 : -1) * Math.random() * 0.6
    ],
    title: `小点坐标-${index}`
  }));

  export default {
    components: { AmapCanvasMarkers },
    data () {
      return {
        zoom: 14,
        center,
        markerData,
        markerOptions: {
          visible: true,
          getPosition (dateItem) {
            return dateItem.position
          },
          getHoverTitle (dateItem) {
            return dateItem.title
          },
          renderOptions: {
            pointStyle: {
              contentImg: 'http://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png',
              width: 19,
              height: 31,
              offset: ['-50%', '-100%'],
              fillStyle: null,
              strokeStyle: null
            }
          },
          events: {
            pointClick (e, point) {
              console.log('event pointClick', e, point)
            },
            pointMouseover (e, point) {
              console.log('event pointMouseover', e, point);
            },
            pointMouseout (e, point) {
              console.log('event pointMouseout', e, point)
            }
          }
        }
      }
    },
    methods: {
      toggleVisible () {
        this.markerOptions.visible = !this.markerOptions.visible;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 50vh;
  }
</style>