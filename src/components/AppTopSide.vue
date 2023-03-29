<script>
import { store } from '../store';

export default {
  data() {
    return {
      store,

      AnimationTime: 500,
    }

  },

  methods: {
    PrevClick() {
      let Timeoutprev = setTimeout(() => {
        store.isAnimatePrev = false;

        store.globalIndex--;
        store.globalIndexPrev = store.globalIndex - 1;
        store.globalIndexPost = store.globalIndex + 1;

        store.globalIndexPrevPrev = store.globalIndexPrev - 1;
        store.globalIndexPostPost = store.globalIndexPost + 1;

        if (store.globalIndex == 1) {
          store.globalIndexPrevPrev = store.ApiArray.length - 1
        } else if (store.globalIndex == 0) {
          store.globalIndexPrev = store.ApiArray.length - 1;
          store.globalIndexPrevPrev = store.globalIndexPrev - 1;
        } else if (store.globalIndex < 0) {
          store.globalIndex = store.ApiArray.length - 1
          store.globalIndexPrev = store.globalIndex - 1;
          store.globalIndexPrevPrev = store.globalIndexPrev - 1;
          store.globalIndexPost = 0;
          store.globalIndexPostPost = store.globalIndexPost + 1;
        } else if (store.globalIndex == store.ApiArray.length - 2) {
          store.globalIndexPostPost = 0;

        }

      }, this.AnimationTime);

      store.isAnimatePrev = true;
    },

    PostClick() {
      let Timeout = setTimeout(() => {
        store.isAnimatePost = false;

        store.globalIndex++;
        store.globalIndexPrev = store.globalIndex - 1;
        store.globalIndexPost = store.globalIndex + 1;

        store.globalIndexPrevPrev = store.globalIndexPrev - 1;
        store.globalIndexPostPost = store.globalIndexPost + 1;



        if (store.globalIndex == store.ApiArray.length - 2) {
          store.globalIndexPostPost = 0;
          store.globalIndexPost = store.globalIndex + 1;

        } else if (store.globalIndex == store.ApiArray.length - 1) {
          store.globalIndexPost = 0;
          store.globalIndexPostPost = store.globalIndexPost + 1;
        } else if (store.globalIndex > store.ApiArray.length - 1) {
          store.globalIndex = 0;
          store.globalIndexPost = store.globalIndex + 1;
          store.globalIndexPostPost = store.globalIndexPost + 1
        }

      }, this.AnimationTime);

      store.isAnimatePost = true;

    },

    activeMainVisibility() {
      store.isHoverMain = true
    },

    disableMainVisibility() {
      store.isHoverMain = false
    },
    changeisVisibleInfo() {
      if (store.isVisibleInfo) {
        store.isVisibleInfo = false;
      } else {
        store.isVisibleInfo = true
      }
    }
  },

  created() {

  },

  mounted() {

  }
}
</script>

<template>
  <div class="cards-container">
    <button class="btn btn-secondary" @click="changeisVisibleInfo()">{{ store.isVisibleInfo ? 'Meno Info' : 'Più info'
    }}</button>
    <div v-if="store.ApiArray.length > 0" class="preview-cards"
      :class="store.isAnimatePost ? 'post-animation' : store.isAnimatePrev ? 'prev-animation' : ''">
      <button class="btn btn-prev" @click="PrevClick()" v-if="store.ApiArray.length > 1"> <i class=" fa-solid
          fa-arrow-left"></i></button>
      <button class="btn btn-post" @click="PostClick()" v-if="store.ApiArray.length > 1"> <i class=" fa-solid
          fa-arrow-right"></i></button>

      <div class="layer-shadows"></div>

      <div class="card card-prev-prev" v-if="store.isAnimatePrev && store.ApiArray.length > 4">
        <img :src="store.ApiArray[store.globalIndexPrevPrev].card_images[0].image_url">
      </div>

      <div class="card card-prev" @click="PrevClick()" v-if="store.ApiArray.length > 2">
        <img :src="store.ApiArray[store.globalIndexPrev].card_images[0].image_url">
      </div>

      <div class="card card-main" @mouseover="activeMainVisibility()" @mouseleave="disableMainVisibility()">
        <img :src="store.ApiArray[store.globalIndex].card_images[0].image_url">
      </div>

      <div class="card card-post" @click="PostClick()" v-if="store.ApiArray.length > 1">
        <img :src="store.ApiArray[store.globalIndexPost].card_images[0].image_url">
      </div>

      <div class="card card-post-post" v-if="store.isAnimatePost && store.ApiArray.length > 3">
        <img :src="store.ApiArray[store.globalIndexPostPost].card_images[0].image_url">
      </div>

    </div>


    <div class="info-box">
      <h2>{{ store.ApiArray[store.globalIndex].name }}</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../scss/variables' as *;

.btn-secondary {
  font-size: .6em;
  border: 1px solid grey;
  margin: .4em;
}

.btn-post,
.btn-prev {
  border-radius: 50%;
  position: absolute;
  top: 50%;
  font-size: 1.5em;
  z-index: 3;
  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;
  background: #0000009d;
  opacity: .8;

  transform: translateY(-50%);

  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.562);
    opacity: 1;
  }
}

.btn-post {
  right: 7%;
}

.btn-prev {
  left: 7%;
}

.cards-container {
  width: 100%;
  height: 100%;

  background: $backgroundcolor;

  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;


  .layer-shadows {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 2;

    aspect-ratio: 16/7;

    background: radial-gradient(rgba(36, 36, 36, 0) 35%, $backgroundcolor 85%);
  }

  .preview-cards {
    margin-top: 1em;
    position: relative;


    width: 80%;
    height: 100%;


    overflow: hidden;


    .card {
      width: calc(100% / 3 - (2em));
      overflow: hidden;
      position: absolute;


      &-prev {
        top: 0;
        left: 10%;
        z-index: 1;

        filter: opacity(.8);
        scale: .97;

        &-prev {
          top: 0;
          left: -10%;
          z-index: 1;

          filter: opacity(.4);
          scale: .9;

          animation: CardPPPrevAnimation $TimeScrollAnimation;
        }
      }

      &-main {
        position: absolute;
        top: 0;
        left: 50%;

        transform: translateX(-50%);
        z-index: 2;

        box-shadow: 0 0 10px black;
        filter: opacity(1);
        scale: 1;

        &:hover {
          animation: focusmain 2s infinite;
        }
      }

      &-post {
        top: 0;
        right: 10%;
        z-index: 1;
        filter: opacity(.8);
        scale: .97;

        &-post {
          right: -5%;
          top: 0;
          z-index: 0;
          filter: opacity(.4);
          scale: .9;

          animation: CardPPPostAnimation $TimeScrollAnimation;
        }
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}

.prev-animation {
  .card-main {
    animation: CardMainPrevAnimation $TimeScrollAnimation;
  }

  .card-prev {
    animation: CardPrevPrevAnimation $TimeScrollAnimation;
  }

  .card-post {
    animation: CardPostPrevAnimation $TimeScrollAnimation;
  }
}

.post-animation {
  .card-main {
    animation: CardMainPostAnimation $TimeScrollAnimation;
  }

  .card-prev {
    animation: CardPrevPostAnimation $TimeScrollAnimation;
  }

  .card-post {
    animation: CardPostPostAnimation $TimeScrollAnimation;
  }
}

// Animazione PrevClick
@keyframes CardMainPrevAnimation {
  0% {
    left: 50%;
    z-index: 2;

    box-shadow: 0 0 10px black;
    filter: opacity(1);
    scale: 1;

    transform: rotate(0) translateX(-50%);
  }

  10% {
    transform: rotate(-5deg) translateX(-50%)
  }

  50% {
    transform: rotate(10deg) translateX(-50%);
  }

  100% {
    filter: opacity(.9);
    left: 75%;
    scale: .97;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    transform: rotate(0) translateX(-50%);
  }
}

@keyframes CardPrevPrevAnimation {
  0% {
    left: 10%;
    z-index: 1;
    transform: translateX(0%) rotate(0);
    filter: opacity(.8);
    scale: .97;
  }

  10% {
    transform: translateX(0%) rotate(-2deg)
  }

  50% {
    transform: translateX(-25%) rotate(5deg)
  }

  100% {
    position: absolute;
    top: 0;
    left: 50%;

    transform: translateX(-50%);
    z-index: 2;

    box-shadow: 0 0 10px black;
    filter: opacity(1);
    scale: 1;
  }
}

@keyframes CardPostPrevAnimation {
  0% {
    top: 0;
    right: 10%;
    z-index: 1;
    filter: opacity(.8);
    scale: .97;
    transform: rotate(0);
  }

  10% {
    transform: rotate(-2deg);
  }

  50% {
    transform: rotate(10deg);
    z-index: 0;
  }

  100% {
    right: -10%;
    opacity: 0;
  }
}

@keyframes CardPPPrevAnimation {
  0% {
    top: 0;
    left: -10%;
    z-index: 1;

    filter: opacity(0);
    scale: .9;
  }

  100% {
    left: 10%;
    z-index: 1;
    transform: translateX(0%) rotate(0);
    filter: opacity(.8);
    scale: .97;
  }

}

// Animazione PostClick
@keyframes CardMainPostAnimation {
  0% {
    left: 50%;
    z-index: 2;

    box-shadow: 0 0 10px black;
    filter: opacity(1);
    scale: 1;

    transform: rotate(0) translateX(-50%);
  }

  10% {
    transform: rotate(5deg) translateX(-50%)
  }

  50% {
    transform: rotate(-10deg) translateX(-25%);
  }

  100% {
    filter: opacity(.8);
    left: 10%;
    scale: .97;
    z-index: 1;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0);
    transform: rotate(0) translateX(0%);
  }
}

@keyframes CardPrevPostAnimation {
  0% {
    left: 10%;
    z-index: 1;
    transform: translateX(0%) rotate(0);
    filter: opacity(.8);
    scale: .97;
  }

  10% {
    transform: rotate(2deg);
  }

  50% {
    transform: rotate(-10deg);
    z-index: 0;
  }

  100% {
    left: -10%;
    opacity: 0;
  }
}

@keyframes CardPostPostAnimation {
  0% {
    top: 0;
    right: 10%;
    z-index: 1;
    filter: opacity(.8);
    scale: .97;
    transform: rotate(0);
  }

  10% {
    transform: translateX(0%) rotate(2deg)
  }

  50% {
    transform: translateX(25%) rotate(-5deg)
  }

  100% {
    position: absolute;
    top: 0;
    right: 50%;

    transform: translateX(50%);
    z-index: 2;

    box-shadow: 0 0 10px black;
    filter: opacity(1);
    scale: 1;
  }
}

@keyframes CardPPPostAnimation {
  0% {
    right: -5%;
    top: 0;
    z-index: 0;
    filter: opacity(0);
    scale: .9;
  }

  100% {
    top: 0;
    right: 10%;
    z-index: 1;
    filter: opacity(.8);
    scale: .97;
  }
}

@keyframes focusmain {
  0% {
    position: absolute;
    top: 0;
    left: 50%;

    transform: translateX(-50%);
    z-index: 2;

    box-shadow: 0 0 10px black;
    filter: opacity(1);
    scale: 1;
    rotate: 0deg;
  }

  50% {
    scale: 1.05;
    rotate: -2deg;
  }

  100% {
    position: absolute;
    top: 0;
    left: 50%;

    transform: translateX(-50%);
    z-index: 2;

    box-shadow: 0 0 10px black;
    filter: opacity(1);
    scale: 1;
    rotate: 0deg;
  }
}
</style>
