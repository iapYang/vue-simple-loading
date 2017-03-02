<template lang="html">
    <div class="vue-loading-container">
        <div :is="spinner"></div>
    </div>
</template>

<script>
import RotatingPlane from './VueLoaing/RotatingPlane.vue';
import DoubleBounce from './VueLoaing/DoubleBounce.vue';
import Wave from './VueLoaing/Wave.vue';
import WanderingCubes from './VueLoaing/WanderingCubes.vue';
import Pulse from './VueLoaing/Pulse.vue';
import ChasingDots from './VueLoaing/ChasingDots.vue';
import ThreeBounce from './VueLoaing/ThreeBounce.vue';
import Circles from './VueLoaing/Circles.vue';
import CubeGrid from './VueLoaing/CubeGrid.vue';
import FadingCircle from './VueLoaing/FadingCircle.vue';

export default {
    components: {
        RotatingPlane,
        DoubleBounce,
        Wave,
        WanderingCubes,
        Pulse,
        ChasingDots,
        ThreeBounce,
        Circles,
        CubeGrid,
        FadingCircle,
    },
    props: ['spinner'],
};
</script>

<style lang="scss" scoped>
    .vue-loading-container {
        position: relative;
        display: inline-block;
    }
</style>
