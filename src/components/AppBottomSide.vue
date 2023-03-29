<script>
import { store } from '../store';


export default {
    data() {
        return {
            store,

            isExpande: false,
        }
    },

    methods: {
        expand() {
            if (this.isExpande) {
                this.isExpande = false
            } else[
                this.isExpande = true
            ]
        },

        changeIndex(indexArguments) {
            store.globalIndex = indexArguments;
            store.globalIndexPost = store.globalIndex + 1;
            store.globalIndexPrev = store.globalIndex - 1;
            store.globalIndexPostPost = store.globalIndexPost + 1;
            store.globalIndexPrevPrev = store.globalIndexPrev - 1;

            if (store.globalIndex == 0) {
                store.globalIndexPrev = store.ApiArray.length - 1;
                store.globalIndexPrevPrev = store.globalIndexPrev - 1
            } else if (store.globalIndex == store.ApiArray.length - 1) {
                store.globalIndexPost = 0
                store.globalIndexPostPost = store.globalIndexPost + 1;
            } else if (store.globalIndex == store.ApiArray.length - 2) {
                store.globalIndexPostPost = 0;
            }

            console.log(store.globalIndex)
        },

        disableMiniVariable() {
            store.isHovermini = false;
        },

        activeMiniVariable() {
            store.isHovermini = true;
        },
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

                    <div class="row">
                        <img :src="store.ApiArray[index].card_images[0].image_url_small" alt="img"
                            @click="changeIndex(index)" :class="store.globalIndex == index ? 'active' : ''"
                            @mouseover="activeMiniVariable()" @mouseleave="disableMiniVariable()">

                        <span class='name' v-if="store.isHovermini">{{ store.ApiArray[index].name }}</span>


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
    margin-bottom: 3em;

    .container-inner {
        margin: 0 auto;
        max-width: 1200px;
        min-height: 100px;

        .box-control {
            display: flex;
            justify-content: center;

            margin: .5em;
            margin-bottom: 5em;

            .btn-primary {
                color: grey;
                border: 2px solid rgb(134, 134, 134);


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
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    margin: 1em auto;


    gap: 0em;

    padding: 2em;
}

.row {
    width: 90%;
    height: 20px;

    position: relative;


    background: #000;

    .name {
        position: absolute;
        top: -80px;

        left: 0;
        z-index: 2;
        padding: 1em;


        text-transform: uppercase;
        font-size: .8em;

        text-align: center;
        opacity: 0;
        display: none;
        transition: all .4s;
    }

    .active {
        filter: contrast(1) brightness(1);
        top: -8px;
        z-index: 2;

    }

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
    width: calc((100% / 8));
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

        &:hover+.name {
            opacity: 1;
            display: inline-block;
            text-shadow: 1px 1px 1px black;
        }
    }


}
</style>