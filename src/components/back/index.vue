<template>
    <div class="header-back">
        <div class="back">
            <i></i>
            <h4 class="title">{{column}}</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header-back",
    props: {
        column: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
.header-back {
    position: relative;
    height: 147px;
}
.back {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    height: 40px;
    line-height: 40px;
    margin-left: 30px;
    i {
        width: 40px;
        height: 40px;
        position: absolute;
        top: 0;
        left: 0;
        &:after {
            position: absolute;
            content: "";
            width: 15px;
            height: 15px;
            border-top: 2px solid #00a3ff;
            border-left: 2px solid #00a3ff;
            box-sizing: border-box;
            transform: rotate(-45deg);
            top: 50%;
            left: 50%;
            margin-top: -7px;
            margin-left: -7px;
            cursor: pointer;
        }
    }
    .title {
        font-size: 16px;
        color: #fff;
        margin-left: 30px;
    }
}
</style>