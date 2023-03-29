<script>
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },

    beforeCreate() {

    },

    mounted() {
    }
}
</script>

<template>
    <div class="container">

        <input :class="store.DontFuond ? 'not-found' : ''" type="text" v-model="store.inputValue"
            :placeholder="store.DontFuond ? 'Carta non Trovata' : 'cerca una carta'" @keyup.enter="$emit('searchEvent')">
        <button class=" btn" @click="$emit('searchEvent')">Cerca</button>

    </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.container {
    display: flex;
    justify-content: center;
    align-items: center;

    input {
        height: 30px;
        width: 300px;
        padding: .4em;
    }

    .not-found {
        border: 1px solid red;
    }
}
</style>
