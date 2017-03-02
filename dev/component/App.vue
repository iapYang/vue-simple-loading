<template lang="html">
    <div class="app-container">
        <message></message>
        <controller></controller>

        <router-view></router-view>
    </div>
</template>

<script>
import Message from './Message.vue';
import Controller from './Controller.vue';

export default {
    components: {
        Message,
        Controller,
    },
};
</script>

<style lang="scss">
@import "../style/reset";
@import "../style/mixin";

@include font-face("Lato-Regular");

.app-container{
    background-color: red;
}
</style>
