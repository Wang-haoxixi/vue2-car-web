<!--
 * @Author: wanghao 1570058176@qq.com
 * @Date: 2022-04-22 00:16:36
 * @LastEditors: wanghao 1570058176@qq.com
 * @LastEditTime: 2022-06-21 22:07:11
 * @FilePath: \web\src\views\index\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <!-- 地图 -->
    <Map />

    <!-- 汽车列表 -->
    <!-- <Cars /> -->

    <!-- 导航 -->
    <Navbar />

    <!-- 会员 -->
    <!-- 方式一 -->
    <!-- <div id="children-view" :class="[isShowRightMenu ? 'open' : '']"> -->
    <div id="children-view" :class="{open: isShowRightMenu}">
      <router-view></router-view>
    </div>

    <!-- 登录 -->
    <Login />
  </div>
</template>

<script>
import Map from "../amap/index.vue"
import Cars from "../cars/index.vue"
import Navbar from "@/components/navbar/index";
// 登录组件
import Login from "./login.vue"
export default {
  name: "Home",
  components: { Map, Cars, Navbar, Login },
  data() {
    return {
      // 是否显示右侧会员中心菜单
      // isShowRightMenu: false,
    }
  },
  computed: {
    /**
    * 第二种控制菜单显隐的方式
    */
    isShowRightMenu() {
      let routerName = this.$route.name
      console.log(routerName)
      return routerName === "Home" ? false : true;
    }
  },
  mounted() {
    // 监听鼠标抬起事件
    document.addEventListener("mouseup", e => {
      // 获取会员内容区的DOM对象
      const userDOM = document.getElementById("children-view");
      if (userDOM) {
        // 判断userDOM对象是否包含源对象
        if (!userDOM.contains(e.target)) {
          // 不包含就关闭会员界面
          this.$router.push({
            name: "Home",
          })
        }
      }
    })
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