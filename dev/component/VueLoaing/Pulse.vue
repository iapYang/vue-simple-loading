<template lang="html">
    <div class="sk-spinner sk-spinner-pulse"></div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import "./style/variables";

.sk-spinner-pulse {
    width: $spinkit-size;
    height: $spinkit-size;
    background-color: $spinkit-spinner-color;
    border-radius: 100%;
    animation: sk-pulseScaleOut 1.0s infinite ease-in-out;
}
@keyframes sk-pulseScaleOut {
    0% {
        transform: scale(0);
    }

    100% {
        transform: scale(1.0);
        opacity: 0;
    }
}
</style>
