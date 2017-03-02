<template lang="html">
    <div class="vue-loading-container">
        <div :is="spinner"></div>
    </div>
</template>

<script>
import FadingCircle from './VueLoaing/FadingCircle.vue';
import RotatingPlane from './VueLoaing/RotatingPlane.vue';
import DoubleBounce from './VueLoaing/DoubleBounce.vue';
import Wave from './VueLoaing/Wave.vue';
import WanderingCubes from './VueLoaing/WanderingCubes.vue';
import Pulse from './VueLoaing/Pulse.vue';
import ChasingDots from './VueLoaing/ChasingDots.vue';

export default {
    components: {
        FadingCircle,
        RotatingPlane,
        DoubleBounce,
        Wave,
        WanderingCubes,
        Pulse,
        ChasingDots,
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
