<template>
    <div>
        <div class="user-warp">
            <img src="@/assets/images/avatar.png" alt="头像">
            <div class="top-info">
                <h4 class="name">1570058176@qq.com</h4>
                <span>
                    文明驾驶分
                    <b>0</b>
                </span>
            </div>
        </div>
        <ul class="links">
            <router-link to="aa" tag="a" class="arrow">
                <i class="icon icon-user-link-account"></i>
                我的帐户
            </router-link>
            <router-link to="aa" tag="a"  class="arrow">
                <i class="icon icon-user-link-order"></i>
                租车订单
            </router-link>
            <router-link to="aa" tag="a"  class="arrow">
                <i class="icon icon-user-link-realname"></i>
                实名认证
            </router-link>
            <router-link to="/safe" tag="a"  class="arrow">
                <i class="icon icon-user-link-set"></i>
                安全设置
            </router-link>
            <router-link to="aa" tag="a"  class="arrow">
                <i class="icon icon-user-link-help"></i>
                帮助中心
            </router-link>
        </ul>
        <button class="logout">登出</button>
    </div>
</template>

<script>
export default {
    name: "User",
    data() {
        return {

        }
    }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>