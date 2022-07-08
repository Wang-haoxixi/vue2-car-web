<!--
 * @Description: 车辆信息card item
 * @Author: wh
 * @Date: 2022-06-22 09:15:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-08 15:23:48
-->
<template>
  <div>
    <section class="car-item">
      <header>
        <h1 class="car-logo">
          <img src="@/assets/images/cars-logo.png" alt="福特">
          <span class="name">Mustang 2019款</span>
        </h1>
        <p class="car-attr">新能源汽车 5座</p>
      </header>
      <div class="car-content">
        <div class="info">
          <div>
            <h4 class="car-number">粤 B745N8</h4>
            <!-- 剩余电量(竖条状显示) -->
            <div>
              <!-- 8个li被激活 -->
              <ul class="car-electricity active-li-8">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <p class="car-distance">
                <sub>约</sub>
                <b>600</b>
                <sub>KM</sub>
              </p>
            </div>
          </div>
        </div>
        <img src="@/assets/images/pic001.jpg" alt="">
      </div>
      <footer>
        <a href="javascript:void();" class="park-link">某某停车场</a>
      </footer>
    </section>
    <!-- 展开悬浮层，绝对定位在item的上面 -->
    <section class="car-item car-detail" :style="{ height }">
      <div class="scroll-warp">
        <h4 class="cloumn">
          某某停车场
          <!-- 关闭按钮 -->
          <i></i>
        </h4>
        <header>
          <h1 class="car-logo">
            <img src="@/assets/images/cars-logo.png" alt="福特">
            <span class="name">Mustang 2019款</span>
          </h1>
          <p class="car-attr">新能源汽车 5座</p>
        </header>
        <img src="@/assets/images/pic001.jpg" class="carimg" alt="">
        <div class="clearfix">
          <div class="pull-left fs-24">
            <h4 class="car-number">粤 B745N8</h4>
          </div>
          <p class="car-distance pull-right">
            <sub>约</sub>
            <b>600</b>
            <sub>KM</sub>
          </p>
        </div>
        <!-- 剩余电量(横条状展示) -->
        <div class="car-electricity-warp">
          <div class="pr">
            <!-- 高亮 (通过width控制剩余电量) -->
            <span class="electricity-high pa" style="width: 40%"></span>
            <!-- 背景 -->
            <span class="electricity-bg"></span>
          </div>
        </div>
        <p class="info color-main fs-14 t-c">取车约支付12.0元停车费，实际补贴12.0元</p>
        <!-- 车辆列表 -->
        <ul class="car-type-list">
          <li class="high">
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
          <li>
            <h4 class="name">日租车</h4>
            <span class="price">￥300/1天</span>
          </li>
        </ul>
        <!-- 参保 -->
        <div class="clause-warp">
          <span>参保《全面保障服务》用车更放心</span>
          <i></i>
          <i class="active m-r-6"></i>
        </div>
      </div>
      <!-- 预约用车按钮 -->
      <a href="javascript:void(0)" class="select-car-botton">预约用车</a>
    </section>
  </div>
</template>

<script>
  export default {
    name: "carList",
    props: {
      // 悬浮层高度
      height: {
        type: String,
        default: "257px",
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "./index.scss";
</style>