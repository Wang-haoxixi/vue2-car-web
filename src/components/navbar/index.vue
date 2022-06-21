<template>
    <div class="navbar-warp">
        <ul>
            <li><i class="icon icon-help icon-w-44"></i></li>
            <li><i class="icon icon-search icon-w-44"></i></li>
            <li>
                <a href="javastript:void()" class="select-car-botton">选择车辆</a>
            </li>
            <li><i class="icon icon-location icon-w-44"></i></li>
            <li><i class="icon icon-user icon-w-44" @click="handleClick"></i></li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        handleClick() {
            this.$router.push("/user")
        }
    }
}
</script>

<style lang="scss" scoped>
.navbar-warp {
    position: fixed;
    z-index: 10;
    left: 0;
    right: 0;
    bottom: 86px;
    text-align: center;
    li {
        display: inline-block;
    }
    i {
        vertical-align: middle;
        margin: 0 17px;
        cursor: pointer;
    }
    .select-car-botton {
        display: inline-block;
        width: 240px;
        height: 84px;
        line-height: 84px;
        text-align: center;
        font-size: 26px;
        border-radius: 100px;
        background: $color-main;
        color: #ffffff;
        margin: 0 17px;
    }
}
</style>