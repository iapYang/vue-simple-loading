<template lang="html">
    <div class="sk-cube-grid">
        <div
         class="sk-cube"
         v-for="n in 9"
         :class="'sk-cube' + n"
         :key="n"
         ></div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import "./style/variables";

.sk-cube-grid {
    $delayRange: 0.4s;
    width: $spinkit-size;
    height: $spinkit-size;
    margin: $spinkit-spinner-margin;

    .sk-cube {
        width: calc(100% / 3);
        height: calc(100% / 3);
        background-color: $spinkit-spinner-color;
        float: left;
        animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;
    }
    /*
   * Spinner positions
   * 1 2 3
   * 4 5 6
   * 7 8 9
   */
    .sk-cube1 {
        animation-delay: $delayRange * 0.50;
    }

    .sk-cube2 {
        animation-delay: $delayRange * 0.75;
    }

    .sk-cube3 {
        animation-delay: $delayRange;
    }

    .sk-cube4 {
        animation-delay: $delayRange * 0.25;
    }

    .sk-cube5 {
        animation-delay: $delayRange * 0.50;
    }

    .sk-cube6 {
        animation-delay: $delayRange * 0.75;
    }

    .sk-cube7 {
        animation-delay: 0.0s;
    }

    .sk-cube8 {
        animation-delay: $delayRange * 0.25;
    }

    .sk-cube9 {
        animation-delay: $delayRange * 0.50;
    }
}
@keyframes sk-cubeGridScaleDelay {
    0%,
    100%,
    70% {
        transform: scale3D(1.0, 1.0, 1.0);
    }

    35% {
        transform: scale3D(0.0, 0.0, 1.0);
    }
}
</style>
