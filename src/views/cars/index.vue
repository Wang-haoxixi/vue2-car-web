<template>
    <div class="cars-warp">
        <div class="cars-swiper-warp">
            <swiper class="swiper" :options="swiperOption">
                <swiper-slide>
                    <car-list height="900px" />
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
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
        </div>
    </div>
</template>

<script>
// 引入插件
import { swiper, swiperSlide } from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";
import carList from "@/components/carlist"
export default {
    name: "Cars",
    components: {
        swiper, swiperSlide, carList
    },
    data() {
        return {
            swiperOption: {
                slidesPerView: 3,
                spaceBetween: 50,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
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