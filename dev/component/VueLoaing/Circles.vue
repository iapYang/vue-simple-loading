<template lang="html">
    <div class="sk-circle">
        <div
         v-for="n in 12"
         class="sk-child"
         :class="'sk-circle' + n"
         :key="n"
         ></div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" coped>
@import "./style/variables";

.sk-circle {
    $circleCount: 12;
    $animationDuration: 1.2s;
    margin: $spinkit-spinner-margin;
    width: $spinkit-size;
    height: $spinkit-size;
    position: relative;

    .sk-child {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
    }

    .sk-child:before {
        content: '';
        display: block;
        margin: 0 auto;
        width: 15%;
        height: 15%;
        background-color: $spinkit-spinner-color;
        border-radius: 100%;
        animation: sk-circleBounceDelay $animationDuration infinite ease-in-out both;
    }
    @for $i from 2 through $circleCount {
        .sk-circle#{$i} {
            transform: rotate(360deg / $circleCount * ($i - 1));
        }
    }
    @for $i from 2 through $circleCount {
        .sk-circle#{$i}:before {
            animation-delay: - $animationDuration + $animationDuration / $circleCount * ($i - 1);
        }
    }
}
@keyframes sk-circleBounceDelay {
    0%,
    100%,
    80% {
        transform: scale(0);
    }

    40% {
        transform: scale(1.0);
    }
}
</style>
