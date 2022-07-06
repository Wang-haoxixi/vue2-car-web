<!--
 * @Description: 窗体 - 信息窗体
 * @Author: wh
 * @Date: 2022-07-06 14:41:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-06 14:59:49
-->
<template>
  <div class="amap-page-container">
    <el-amap vid="amap" :zoom="zoom" :center="center" class="amap-demo">
      <el-amap-info-window :position="currentWindow.position" :content="currentWindow.content" :visible="currentWindow.visible" :events="currentWindow.events">
      </el-amap-info-window>
    </el-amap>
    <button @click="switchWindow(0)">展示窗体1</button>
    <button @click="switchWindow(1)">展示窗体2</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        zoom: 14, //层级
        center: [121.5273285, 31.21515044], //中心
				// 窗体数组
        windows: [{
          position: [121.5273285, 31.21515044],
          content: 'Hi! I am here!',
          visible: true,
          events: {
						// 关闭窗体
            close () {
              alert('close infowindow 1');
            }
          }
        }, {
          position: [121.5375285, 31.21515044],
          content: 'Hi! I am here too!',
          visible: true,
          events: {
            close () {
              alert('close infowindow 2');
            }
          }
        }],
        currentWindow: {
          position: [0, 0], //信息窗体显示基点位置（自v1.2 新增）
          content: '', //显示内容。支持字符串和HTML。
          visible: false, //信息窗体是否显示。这里需要注意的是，高德地图只支持同时一个信息窗体的显示。所以一旦有窗体显示切换的场景，visible数组的状态需要自行维护。
          events: {}, //事件
        }
      }
    },
    mounted () {
			// 默认展示第一个窗体
      this.currentWindow = this.windows[0];
    },

    methods: {
      // 选择窗体
      switchWindow (tab) {
        // console.log(tab);
        this.currentWindow.visible = false;
        this.$nextTick(() => {
          this.currentWindow = this.windows[tab];
          this.currentWindow.visible = true;
        });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .amap-demo {
    height: 80vh;
  }
</style>