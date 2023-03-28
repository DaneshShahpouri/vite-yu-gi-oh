<script>
import { store } from '../store.js';
export default {
    data() {
        return {
            store,
        }
    },

    methods: {
        changeisVisibleInfo() {
            if (store.isVisibleInfo) {
                store.isVisibleInfo = false;
            } else {
                store.isVisibleInfo = true
            }
        }
    },

    mounted() {
        console.log(store.ApiArray)
    }
}
</script>

<template>
    <button class="btn btn-secondary" @click="changeisVisibleInfo()">{{ store.isVisibleInfo ? 'Meno Info' : 'Più info'
    }}</button>
    <ul class="container" :class="store.isVisibleInfo ? 'open' : ''">
        <li class="title"> type</li>
        <li>{{ store.ApiArray[store.globalIndex].type }}</li>

        <li class="title">frame type</li>
        <li>{{ store.ApiArray[store.globalIndex].frameType }}</li>

        <li class="title">desc</li>
        <li>{{ store.ApiArray[store.globalIndex].desc }}</li>

        <li class="title">race</li>
        <li>{{ store.ApiArray[store.globalIndex].race }}</li>
    </ul>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.btn-secondary {
    font-size: .6em;
    border: 1px solid grey;
    margin: .4em;
}


.container {
    overflow-y: auto;
    width: 100%;
    max-width: 1000px;
    max-height: 50px;

    color: grey;


    .title {
        display: inline-block;
        width: 100%;
        text-align: end;
        color: $primary;
        text-transform: uppercase;
        font-weight: 700;
        border-bottom: 1px solid darken($primary, $amount: 10)
    }

    li {
        text-decoration: none;
        padding: .4em;
    }
}

.open {
    max-height: 500px;
}
</style>