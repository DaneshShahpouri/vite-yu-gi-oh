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
        //console.log(store.ApiArray)
    }
}
</script>

<template>
    <div class="container-wrapper" v-if="store.ApiArray.length > 0">

        <ul class=" container" :class="store.isVisibleInfo ? 'open' : ''">
            <li class="title"> type</li>
            <li>{{ store.ApiArray[store.globalIndex].type }}</li>

            <li class="title">frame type</li>
            <li>{{ store.ApiArray[store.globalIndex].frameType }}</li>

            <li class="title">desc</li>
            <li>{{ store.ApiArray[store.globalIndex].desc }}</li>

            <li class="title">race</li>
            <li>{{ store.ApiArray[store.globalIndex].race }}</li>
        </ul>

    </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;



.container-wrapper {
    display: flex;
    flex-direction: column-reverse;
    justify-content: flex-start;
    height: 100%;
    width: 330px;

    position: relative;
}

.container {
    transition: all .4s;
    position: absolute;
    top: 0px;
    left: 0;
    width: 300px;
    max-height: 0px;

    overflow-y: hidden;

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
    max-height: 650px;
    overflow-y: auto;
    position: absolute;

    direction: rtl;

    z-index: 3;

    span {
        direction: ltr;
    }
}
</style>