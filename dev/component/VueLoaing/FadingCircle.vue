<template lang="html">
    <div class="sk-fading-circle sk-container">
        <div
         v-for="n in 12"
         :key="n"
         :class="'sk-circle' + (n + 1)"
         class="sk-circle"
        ></div>
    </div>
</template>

<script>
export default {
    methods() {

    },
};
</script>

<style lang="scss">
@import "./style/variables";

.sk-fading-circle {
    $circleCount: 12;
    $animationDuration: 1.2s;

    width: $spinkit-size;
    height: $spinkit-size;
    position: relative;

    .sk-circle {
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      display: inline-block;
    }

    .sk-circle:before {
      content: '';
      display: block;
      margin: 0 auto;
      width: 15%;
      height: 15%;
      background-color: $spinkit-spinner-color;
      border-radius: 100%;
      animation: sk-circleFadeDelay $animationDuration infinite ease-in-out both;
    }

    @for $i from 2 through $circleCount {
        .sk-circle#{$i} { transform: rotate(360deg / $circleCount * ($i - 1)); }
    }

    @for $i from 2 through $circleCount {
        .sk-circle#{$i}:before { animation-delay: - $animationDuration + $animationDuration / $circleCount * ($i - 1); }
    }
}

@keyframes sk-circleFadeDelay {
    0%, 39%, 100% { opacity: 0 }
    40% { opacity: 1 }
}
</style>
