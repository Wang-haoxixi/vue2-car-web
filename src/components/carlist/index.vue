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
                        <div>
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
        <!-- 展开悬浮层 -->
        <section class="car-item car-detail" :style="{ height }">
            <div class="scroll-warp">
                <h4 class="cloumn">
                    某某停车场
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
                <div class="car-electricity-warp">
                    <div class="pr">
                        <span class="electricity-high pa" style="width: 40%"></span>
                        <span class="electricity-bg"></span>
                    </div>
                </div>
                <p class="info color-main fs-14 t-c">取车约支付12.0元停车费，实际补贴12.0元</p>
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
                <div class="clause-warp">
                    <span>参保《全面保障服务》用车更放心</span>
                    <i></i>
                    <i class="active m-r-6"></i>
                </div>
            </div>
            <!-- 预约用车 -->
            <a href="javascript:void(0)" class="select-car-botton">预约用车</a>
        </section>
    </div>
</template>

<script>
export default {
    name: "carList",
    props: {
        height: {
            type: String,
            default: "257px",
        }
    }
}
</script>

<style lang="scss" scoped>
.car-item {
    // width: 505px;
    height: 257px;
    padding: 30px 30px 0;
    box-sizing: border-box;
    margin: auto;
    background-color: #ffffff;
    border-radius: 24px;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.2);

    header {
        @include clearfix;
    }
}
.car-detail {
    // display: none;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    padding-top: 0;
    .cloumn {
        position: relative;
        font-size: 20px;
        padding: 28px 0 22px 0;
        margin-bottom: 18px;
        border-bottom: 1px solid #e1e1e1;
        i {
            width: 20px;
            height: 20px;
            cursor: pointer;
            position: absolute;
            top: 30px;
            right: 0;
            &:before,
            &:after {
                position: absolute;
                content: "";
                height: 20px;
                border-left: 2px solid #999c9f;
                left: 50%;
            }
            &:before {
                transform: rotate(45deg);
            }
            &:after {
                transform: rotate(-45deg);
            }
        }
    }
    .carimg {
        width: 100%;
    }
    .car-electricity-warp {
        margin-top: 17px;
        padding: 15px;
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
        border-radius: 30px;
        span {
            display: block;
        }
        .electricity-high {
            height: 8px;
            top: 0;
            left: 0;
            background: #0f9cee;
            border-radius: 30px;
        }
        .electricity-bg {
            height: 8px;
            background: #e1e1e1;
            border-radius: 30px;
        }
    }
    .info {
        margin: 33px 0 26px;
    }
    .select-car-botton{
        position: absolute;
        bottom: -42px;
        left: 50%;
        margin-left: -120px;
    }
}
.car-type-list {
    li {
        height: 43px;
        background: #f3f3f3;
        border-width: 2px;
        border-style: solid;
        border-color: #f3f3f3;
        border-radius: 10px;
        padding: 0 16px 0 22px;
        font-size: 16px;
        line-height: 43px;
        margin-bottom: 15px;
        &.high {
            border-color: #0f9cee;
        }
        .name {
            float: left;
        }
        .price {
            float: right;
        }
    }
}
.clause-warp {
    @include clearfix;
    span {
        float: left;
        font-size: 16px;
        color: #34393f;
    }
    i {
        float: right;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: #cccccc;
        &.active {
            background: $color-main;
        }
        &:before {
            display: inline-block;
            content: "";
            width: 10px;
            height: 7px;
            border-left: 2px solid #fff;
            border-bottom: 2px solid #fff;
            transform: rotate(-45deg);
            margin-left: 4px;
        }
    }
}
.scroll-warp {
    height: 100%;
    overflow-y: auto;
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
.car-logo {
    float: left;

    img {
        display: inline-block;
        height: 34px;
        margin-right: 10px;
        vertical-align: middle;

        .name {
            font-size: 16px;
        }
    }
}
.car-attr {
    float: right;
    opacity: 0.5;
    line-height: 34px;
}
.car-content {
    position: relative;
    @include clearfix;
    margin: 11px 0;

    img {
        float: right;
        height: 118px;
    }

    .info {
        display: flex;
        align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    .car-number {
        font-size: 18px;
    }

    .car-electricity {
        padding-top: 10px;
        display: inline-block;

        li {
            width: 7px;
            height: 24px;
            border-radius: 100px;
            margin-right: 3px;
            background-color: #e1e1e1;
            display: inline-block;

            // &.active {
            //     background-image: linear-gradient(0deg,
            //             #0b8ad7 0%,
            //             #11a6fa 100%),
            //         linear-gradient(#e1e1e1,
            //             #e1e1e1);
            //     background-blend-mode: normal,
            //         normal;
            // }
        }

        @for $i from 1 through 10 {
            &.active-li-#{$i} {
                li:nth-of-type(-n + #{$i}) {
                    background-image: linear-gradient(
                            0deg,
                            #0b8ad7 0%,
                            #11a6fa 100%
                        ),
                        linear-gradient(#e1e1e1, #e1e1e1);
                    background-blend-mode: normal, normal;
                }
            }
        }

        // &.active-li-1 {
        //     li:nth-of-type(1) {
        //         background-image: linear-gradient(0deg, #0b8ad7 0%, #11a6fa 100%), linear-gradient(#e1e1e1, #e1e1e1);
        //         background-blend-mode: normal, normal;
        //     }
        // }

        // &.active-li-2 {
        //     li:nth-of-type(-n+2) {
        //         background-image: linear-gradient(0deg, #0b8ad7 0%, #11a6fa 100%), linear-gradient(#e1e1e1, #e1e1e1);
        //         background-blend-mode: normal, normal;
        //     }
        // }
    }
}

.car-distance {
    display: inline-block;

    b {
        font-size: 22px;
        margin: 0 5px;
    }

    sub {
        position: relative;
        top: -1px;

        &:first-child {
            opacity: 0.8;
        }
    }
}

footer {
    .park-link {
        position: relative;
        display: block;
        border-top: 1px solid #e1e1e1;
        color: $color-main;
        opacity: 0.8;
        line-height: 51px;

        &:after {
            content: "";
            position: absolute;
            right: 0;
            top: 50%;
            width: 8px;
            height: 8px;
            margin-top: -4px;
            border-top: 1px solid #dddedf;
            border-right: 1px solid #dddedf;
            transform: rotate(45deg);
        }
    }
}
</style>