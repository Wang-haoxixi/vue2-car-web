<template>
    <div id="index">
        <!-- vid:地图容器节点的ID -->
        <el-amap class="aMapBox" vid="aMapBox" :events="events"></el-amap>
    </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
    name: "Amap",
    data() {
        return {
            map: null,
            zoom: 16, // 地图初始化缩放级别
            center: [106.636969, 30.479522], // 地图中心点坐标值
            // 事件
            events: {},
        }
    },

    mounted() {
        // 项目加载完毕后再调用原生SDK
        lazyAMapApiLoaderInstance.load().then(() => {
            this.map = new AMap.Map('aMapBox', {
                center: this.center,
                zoom: this.zoom, // 初始化地图层级
            });
        });
    },

}
</script>

<style lang="scss" scoped>
#index {
    height: 100vh;
}
</style>