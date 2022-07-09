<!--
 * @Description: 首页布局页面
 * @Author: wh
 * @Date: 2022-06-22 09:15:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-08 16:47:26
-->
<template>
  <div>
    <!-- 地图 -->
    <Map ref="map" @loadMap="loadMap" />

    <!-- 汽车列表 -->
    <!-- <Cars /> -->

    <!-- 导航 -->
    <Navbar />

    <!-- 会员 -->
    <!-- 方式一<控制菜单显隐> -->
    <!-- <div id="children-view" :class="[isShowRightMenu ? 'open' : '']"> -->
    <div id="children-view" :class="{open: isShowRightMenu}">
      <router-view></router-view>
    </div>

    <!-- 登录 -->
    <Login />
  </div>
</template>

<script>
  import Map from "../amap/index.vue";
  import Cars from "../cars/index.vue";
  import Navbar from "@/components/navbar/index";
  import { Parking } from "@/api/parking";
  // 登录组件
  import Login from "./login.vue"
  export default {
    name: "Home",
    components: { Map, Cars, Navbar, Login },
    data () {
      return {
        // 是否显示右侧会员中心菜单
        // isShowRightMenu: false,
      }
    },
    computed: {
      /**
       * 方式二<控制菜单显隐>
       */
      isShowRightMenu () {
        let routerName = this.$route.name
        // console.log(routerName)
        return routerName === "Home" ? false : true;
      }
    },
    mounted () {
      // 监听鼠标抬起事件
      document.addEventListener("mouseup", e => {
        // 获取会员内容区的DOM对象
        const userDOM = document.getElementById("children-view");
        if (userDOM) {
          // 判断userDOM对象是否包含源对象(用于判断DOM元素的包含关系,它以HTMLElement为参数,且返回布尔值)
          if (!userDOM.contains(e.target)) {
            // 若已经是在home了，就阻止行为
            if (this.$route.name === "Home") return false;
            // 不包含就关闭会员界面(因为isShowRightMenu计算属性的原因,只需要改变$router就行)
            this.$router.push({
              name: "Home",
            })
          }
        }
      })
    },
    methods: {
      // 地图初始化完成时回调
      loadMap () {
        this.getParkings();
      },
      // 停车场接口
      getParkings () {
        Parking().then((res) => {
          const data = res.data.data;
          // 处理数据
          data.forEach(item => {
            item.position = item.lnglat.split(","); //点标记坐标
            item.content = "<img src='" + require('@/assets/images/parking_location_img.png') + "' />"; //点标记图
            item.offset = [-35, -63]; //点标记偏移量
            item.offsetText = [-25, -57]; //文本偏移量
            item.text = `<div style="width:50px;height: 55px;color:#fff;text-align:center;line-height: 52px">${item.carsNumber}</div>`; //文本内容
            item.events = {
              // 点击事件 (此时不能传o，o为当前点击点的地图实例数据，不是停车场的坐标，应该传当前停车场item.lnglat)
              click: (o) => this.walking(o, item)
            }
          })
          // console.log(data)
          // 调用子组件地图的方法(父组件调子组件方法)
          this.$refs.map.parkingData(data);
        })
      },
      // 步行导航
      walking (o, item) {
        // console.log("o: ", o)
        // console.log("item: ", item)
        // 终点
        let lacation_end = item.lnglat.split(",");
        // 调用子组件中的handleWalking方法
        this.$refs.map.handleWalking(lacation_end);
      }
    },
    watch: {
      /**
       * 第一种控制菜单显隐的方式
       */
      // 监听路由变化
      // "$route": {
      //     handler: function (newValue) {
      //         let routerName = newValue.name
      //         // 监听的路由名称若不为Home就显示右侧会员中心菜单
      //         this.isShowRightMenu = routerName === "Home" ? false : true;
      //     },
      //     immediate: true
      // }
    }
  }
</script>

<style lang="scss" scoped>
  #children-view {
    position: fixed;
    // 此处的层级需要比汽车列表的层级要高，不然会被汽车列表遮挡住
    z-index: 101;
    top: 0;
    bottom: 0;
    right: -408px;
    width: 408px;
    box-shadow: -5px 0px 38px 0px rgba(0, 0, 0, 0.4);
    background: #34393f;
    transition: all 0.5s ease-in-out;

    &.open {
      right: 0;
    }
  }
</style>