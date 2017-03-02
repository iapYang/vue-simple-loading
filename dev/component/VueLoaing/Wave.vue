<template lang="html">
    <div class="sk-wave">
        <div
         class="sk-rect"
         v-for="n in 5"
         :class="'sk-rect' + (n + 1)">
        </div>
    </div>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@import "./style/variables";

.sk-wave {
  $rectCount: 5;
  $animationDuration: 1.2s;
  $delayRange: 0.4s;

  width: $spinkit-size * 1.25;
  height: $spinkit-size;
  text-align: center;
  font-size: 0px;

  .sk-rect {
    background-color: $spinkit-spinner-color;
    height: 100%;
    width: 6px;
    margin: 0 3px 0 0;
    display: inline-block;
    animation: sk-waveStretchDelay $animationDuration infinite ease-in-out;
  }

  @for $i from 1 through $rectCount {
    .sk-rect#{$i} { animation-delay: - $animationDuration + $delayRange / ($rectCount - 1) * ($i - 1); }
  }
}

@keyframes sk-waveStretchDelay {
  0%, 40%, 100% { transform: scaleY(0.4) }
  20% { transform: scaleY(1.0) }
}
</style>
