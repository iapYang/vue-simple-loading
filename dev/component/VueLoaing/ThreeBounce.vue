<template lang="html">
    <div class="sk-three-bounce">
        <div class="sk-child sk-bounce1"></div>
        <div class="sk-child sk-bounce2"></div>
        <div class="sk-child sk-bounce3"></div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" coped>
@import "./style/variables";

.sk-three-bounce {
    $animationDuration: 1.4s;
    $delayRange: 0.32s;
    width: $spinkit-size * 2;
    text-align: center;

    .sk-child {
        width: $spinkit-size / 2;
        height: $spinkit-size / 2;
        background-color: $spinkit-spinner-color;
        border-radius: 100%;
        display: inline-block;
        animation: sk-three-bounce $animationDuration ease-in-out 0s infinite both;
    }

    .sk-bounce1 {
        animation-delay: -$delayRange;
    }

    .sk-bounce2 {
        animation-delay: -$delayRange / 2;
    }
}
@keyframes sk-three-bounce {
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
