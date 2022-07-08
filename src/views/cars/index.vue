<!--
 * @Description: 车辆信息
 * @Author: wh
 * @Date: 2022-06-22 09:15:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-08 15:30:45
-->
<template>
  <div class="cars-warp">
    <!-- 轮播区域 -->
    <div class="cars-swiper-warp">
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide>
          <!-- 通过向子组件中传递高度，实现点击展开车辆信息功能 -->
          <car-list height="600px" />
        </swiper-slide>
        <swiper-slide>
          <car-list />
        </swiper-slide>
        <swiper-slide>
          <car-list />
        </swiper-slide>
        <swiper-slide>
          <car-list />
        </swiper-slide>
        <swiper-slide>
          <car-list />
        </swiper-slide>
      </swiper>
      <!-- 上一个 -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <!-- 下一个 -->
      <div class="swiper-button-next" slot="button-next"></div>
    </div>
  </div>
</template>

<script>
  // 引入插件 vue-awesome-swiper // "^3.1.3"版本 swiper3
  import { swiper, swiperSlide } from "vue-awesome-swiper";
  // swiper样式包
  import "swiper/dist/css/swiper.css";
  // 车辆列表(item)
  import carList from "@/components/carlist"
  export default {
    name: "Cars",
    components: {
      swiper,
      swiperSlide,
      carList
    },
    data () {
      return {
        /**
         * @description: swiper配置项
         */
        swiperOption: {
          /**
           * 设置滑块容器能够同时显示的item(banner)数量(carousel模式)。
           * 可以设置为数字（可为小数，小数不可loop），或者 'auto'则自动根据slides的宽度来设定数量。
           */
          slidesPerView: 3, // 滑块容器能够同时显示3个banner
          spaceBetween: 50, // 轮播间的间距
          navigation: { // 导航按钮设置
            prevEl: '.swiper-button-prev', // 上一个按钮之DOM类名
            nextEl: '.swiper-button-next', // 下一个按钮之DOM类名
          }
        }
      }
    },
    methods: {

    },
  }
</script>

<style lang="scss" scoped>
  @import "./index.scss";
</style>