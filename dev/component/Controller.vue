<template lang="html">
    <div class="controller">
        <input type="text" v-model="id">
        <input type="text" v-model="text">
        <input type="button" value="add" @click="clickHandler">
    </div>
</template>

<script>
import {
    mapActions,
} from 'vuex';

export default {
    data() {
        return {
            id: '',
            text: '',
        };
    },
    computed: {},
    ready() {},
    attached() {},
    methods: {
        ...mapActions([
            'addTodo',
        ]),
        clickHandler() {
            this.addTodo({
                id: this.id,
                text: this.text,
            });
        },
    },
    components: {},
};
</script>
