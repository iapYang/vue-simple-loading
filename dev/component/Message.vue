<template lang="html">
    <div class="message">
        <h1>{{ todoCount }}</h1>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters([
            'todoCount',
        ]),
    },
};
</script>

<style lang="scss">
.message{
    h1{
        font-family: "Lato-Regular";
        font-size: 20px;
        color: blue;
        transform: translateX(50px);
    }
}
</style>
