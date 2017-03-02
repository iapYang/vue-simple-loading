<template lang="html">
    <div class="vue-loading-container">
        <rotating-plane v-if="spinner === 'rotating-plane'"></rotating-plane>
        <fading-circle v-if="spinner === 'fading-circle'"></fading-circle>
    </div>
</template>

<script>
import FadingCircle from './VueLoaing/FadingCircle.vue';
import RotatingPlane from './VueLoaing/RotatingPlane.vue';

export default {
    components: {
        FadingCircle,
        RotatingPlane,
    },
    props: ['spinner'],
};
</script>

<style lang="scss" scoped>
    .vue-loading-container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
