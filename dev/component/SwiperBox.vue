<template lang="html">
    <div class="swiper-box">
        <swiper :options="swiperOption">
            <swiper-slide
             v-for="spinner,index in spinners"
             :key="index"
            >
                <div class="title">
                    <span>{{ spinner }}</span>
                </div>
                <div class="vue-loading-box">
                     <vue-loading :spinner="spinner"></vue-loading>
                </div>
            </swiper-slide>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import VueLoading from './VueLoading.vue';
import {swiper, swiperSlide} from 'vue-awesome-swiper';

export default {
    data() {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                mousewheelControl: true,
            },
            spinners: [
                'rotating-plane',
                'double-bounce',
                'wave',
                'wandering-cubes',
                'pulse',
                'chasing-dots',
                'three-bounce',
                'circles',
                'cube-grid',
                'fading-circle',
                'folding-cube',
            ],
        };
    },
    components: {
        VueLoading,
        swiper,
        swiperSlide,
    },
};
</script>

<style lang="scss">
.swiper-box {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #d35400;

    .swiper-container {
        width: 100%;
        height: 100%;

        .swiper-pagination-bullet {
            background: #fff;
        }

        .swiper-button-next, .swiper-button-prev {
            background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMThweCIgaGVpZ2h0PSIyNXB4IiB2aWV3Qm94PSIwIDAgMTggMjUiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDE4IDI1IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsPSIjRkZGRkZGIiBkPSJNMTcuMzM4LDEyLjQ4NWMtNC4xNTYsNC4xNTYtOC4zMTIsOC4zMTItMTIuNDY4LDEyLjQ2Nw0KCWMtMS40MDItMS40MDItMi44MDUtMi44MDQtNC4yMDctNC4yMDZjMi43NTYtMi43NTcsNS41MTMtNS41MTQsOC4yNy04LjI3QzYuMTc2LDkuNzIsMy40MTksNi45NjMsMC42NjMsNC4yMDcNCglDMi4wNjUsMi44MDUsMy40NjgsMS40MDIsNC44NywwQzQuODEyLTAuMDU5LDE3LjQyNSwxMi41NjIsMTcuMzM4LDEyLjQ4NUwxNy4zMzgsMTIuNDg1eiIvPg0KPC9zdmc+DQo=);
        }

        .swiper-button-prev {
            transform: rotateY(180deg);
        }

        .swiper-slide {
            display: inline-flex;
            justify-content: center;
            align-items: center;

            &:nth-child(1) {
                background-color: #d35400;
            }

            &:nth-child(2) {
                background-color: #2c3e50;
            }

            &:nth-child(3) {
                background-color: #1abc9c;
            }

            &:nth-child(4) {
                background-color: #2980b9;
            }

            &:nth-child(5) {
                background-color: #7f8c8d;
            }

            &:nth-child(6) {
                background-color: #ffcb65;
            }

            &:nth-child(7) {
                background-color: #d35400;
            }

            &:nth-child(8) {
                background-color: #27ae60;
            }

            &:nth-child(9) {
                background-color: #d35400;
            }

            &:nth-child(10) {
                background-color: #2c3e50;
            }

            &:nth-child(11) {
                background-color: #d35400;
            }

            &:nth-child(12) {
                background-color: #1abc9c;
            }
        }
    }
}

.title {
    position: absolute;
    top: 20px;
    left: 0;
    width: 100%;
    text-align: center;

    span {
        font-size: 40px;
        font-family: "Lato-Regular";
        color: #fff;
        text-transform: capitalize;
    }
}

.vue-loading-box {
    position: relative;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
</style>
