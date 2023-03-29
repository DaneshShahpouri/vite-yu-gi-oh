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

        <span v-if="store.DontFuond">Nessuna Carta Trovata</span>


        <div class="input-wrapper">

            <input :class="store.DontFuond ? 'not-found' : ''" type="text" v-model="store.inputValue"
                :placeholder="store.DontFuond ? 'Carta non Trovata' : 'cerca una carta'"
                @keyup.enter="$emit('searchEvent')">
            <button class=" btn" @click="$emit('searchEvent')">Cerca</button>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span {
        color: rgb(172, 14, 14);
        margin-bottom: 3em;
        margin-top: 1em;
    }

    input {
        height: 30px;
        width: 300px;
        padding: .4em;
    }

    .not-found {
        background-color: rgba(105, 3, 3, 0);

        &:focus-visible {
            outline: 3px solid red
        }
    }
}
</style>
