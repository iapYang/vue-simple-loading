<template lang="html">
    <div class="vue-loading-container">
        <fading-circle></fading-circle>
    </div>
</template>

<script>
import FadingCircle from './VueLoaing/FadingCircle.vue';

export default {
    components: {
        FadingCircle,
    },
};
</script>

<style lang="scss">
    .vue-loading-container {
        position: relative;
        width: 100%;
        height: 100%;
    }
</style>
