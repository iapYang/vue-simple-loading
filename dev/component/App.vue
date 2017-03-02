<template lang="html">
    <div class="app-container">
        <message></message>
        <controller></controller>
        <div class="loading">
            <vue-loading></vue-loading>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import Message from './Message.vue';
import Controller from './Controller.vue';
import VueLoading from './VueLoading.vue';

export default {
    components: {
        Message,
        Controller,
        VueLoading,
    },
};
</script>

<style lang="scss">
@import "../style/reset";
@import "../style/mixin";

@include font-face("Lato-Regular");

html,body {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
}

.app-container{
    background-color: red;

    .loading {
        position: relative;
        background-color: #000;
        width: 60px;
        height: 60px;
        margin: 0 auto;
    }
}
</style>
