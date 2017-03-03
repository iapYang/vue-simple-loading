<template lang="html">
    <div class="sk-rotating-plane"></div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import "./style/variables";

.sk-rotating-plane {
    position: relative;
    width: $spinkit-size;
    height: $spinkit-size;
    background-color: $spinkit-spinner-color;
    animation: sk-rotatePlane 1.2s infinite ease-in-out;
}
@keyframes sk-rotatePlane {
    0% {
        transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    }

    50% {
        transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    }

    100% {
        transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    }
}
</style>
