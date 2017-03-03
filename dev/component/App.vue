<template lang="html">
    <div class="app-container">
        <!-- <swiper-box></swiper-box> -->
        <vue-loading spinner="circles"></vue-loading>
        <router-view></router-view>
    </div>
</template>

<script>
import SwiperBox from './SwiperBox.vue';
import VueLoading from '../script/vue-loading.js';

export default {
    data() {
        return {

        };
    },
    components: {
        SwiperBox,
        VueLoading,
    },
};
</script>

<style lang="scss">
@import "../style/reset";
@import "../style/mixin";

@include font-face("Lato-Regular");

html,body {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}

#app, .app-container{
    position: relative;
    width: 100%;
    height: 100%;

}
</style>
