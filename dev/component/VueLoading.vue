<template lang="html">
    <div class="vue-loading-container">
        <rotating-plane v-if="spinner === 'rotating-plane'"></rotating-plane>
        <fading-circle v-if="spinner === 'fading-circle'"></fading-circle>
        <double-bounce v-if="spinner === 'double-bounce'"></double-bounce>
        <!-- <wave v-if="spinner === 'wave'"></wave> -->
    </div>
</template>

<script>
import FadingCircle from './VueLoaing/FadingCircle.vue';
import RotatingPlane from './VueLoaing/RotatingPlane.vue';
import DoubleBounce from './VueLoaing/DoubleBounce.vue';
// import Wave from './VueLoaing/Wave.vue';

export default {
    components: {
        FadingCircle,
        RotatingPlane,
        DoubleBounce,
        // Wave,
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
