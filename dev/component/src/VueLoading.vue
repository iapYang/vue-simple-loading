<template lang="html">
    <div class="vue-loading-container">
        <div :is="spinner"></div>
    </div>
</template>

<script>
import RotatingPlane from './VueLoading/RotatingPlane.vue';
import DoubleBounce from './VueLoading/DoubleBounce.vue';
import Wave from './VueLoading/Wave.vue';
import WanderingCubes from './VueLoading/WanderingCubes.vue';
import Pulse from './VueLoading/Pulse.vue';
import ChasingDots from './VueLoading/ChasingDots.vue';
import ThreeBounce from './VueLoading/ThreeBounce.vue';
import Circles from './VueLoading/Circles.vue';
import CubeGrid from './VueLoading/CubeGrid.vue';
import FadingCircle from './VueLoading/FadingCircle.vue';
import FoldingCube from './VueLoading/FoldingCube.vue';

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
        FoldingCube,
    },
    props: ['spinner'],
};
</script>

<style lang="scss" scoped>
    @import '../../style/reset';
    .vue-loading-container {
        position: relative;
        display: inline-block;
    }
</style>
