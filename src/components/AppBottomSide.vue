<script>
import { store } from '../store';


export default {
    data() {
        return {
            store,

            isExpande: true,
        }
    },

    methods: {
        expand() {
            if (this.isExpande) {
                this.isExpande = false
            } else[
                this.isExpande = true
            ]
        }
    },

    mounted() {
    }

}
</script>

<template>
    <div class="container">
        <div class="container-inner">

            <div class="box-control">
                <button class="btn btn-primary" @click="expand()">
                    {{ this.isExpande ? 'Chiudi Mazzo' : 'Espandi Mazzo' }}
                </button>
            </div>


            <div class="row-wrapper">



                <div v-for="(card, index) in store.ApiArray" class="card" v-if="this.isExpande">

                    <div class="row" :class="'element-' + index">

                        <img :src="store.ApiArray[index].card_images[0].image_url_small" alt="img">



                    </div>

                </div>

            </div>

        </div>

    </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;


.container {
    width: 100%;
    height: 200px;
    background: $backgroundcolor;

    .container-inner {
        max-width: 1200px;
        min-height: 500px;

        .box-control {
            display: flex;
            justify-content: center;

            margin: 1.5em;

            .btn-primary {
                color: darken($primary, $amount: 10);
                border: 2px solid rgb(134, 134, 134);
                border-radius: 10px;

                &:hover {
                    color: lighten($primary, $amount: 20);
                    border: 2px solid rgb(255, 255, 255);
                }

            }
        }
    }
}

.row-wrapper {
    width: 100%;
    display: flex;
    flex-flow: row-reverse wrap;
    align-items: center;
    justify-content: center;
    margin: 1em auto;

    gap: 0em;

    padding: 2em;
}

.row {
    width: 80%;
    height: 20px;

    position: relative;


    background: #000;

    &-1 {
        width: 50%;
        margin-left: 5em;
    }

    &-2 {
        width: 60%;
        margin-left: 3em;
    }

    &-3 {
        width: 70%;
        margin-left: 1.5em;
    }

    &-4 {
        width: 80%;
        margin-left: 1em;
    }

    &-5 {
        width: 90%;
    }
}

.card {
    width: calc((100% / 7));
    // position: absolute;
    bottom: 0;
    height: 120px;
    margin: -0.9em;
    z-index: 2;
    //background: #000;

    img {
        width: 100%;

        position: absolute;
        top: 0;

        object-fit: contain;
        box-shadow: 1px 1px 5px black;
        background: $backgroundcolor;
        z-index: 1;

        filter: contrast(1.05) brightness(.2);
        transition: all .4s;

        &:hover {
            filter: contrast(1) brightness(1);
            top: -28px;
            z-index: 2;
        }
    }


}
</style>