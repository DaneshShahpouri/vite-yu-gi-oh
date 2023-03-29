<script>
import { store } from './store';
import AppBottomSide from './components/AppBottomSide.vue';
import axios from 'axios';

import AppTopSide from './components/AppTopSide.vue';
import AppMiddle from './components/AppMiddle.vue';


export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppTopSide,
    AppBottomSide,
    AppMiddle,
  },

  beforeCreate() {

    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0').then((res) => {
      //console.log(res)
      for (let i = 0; i < res.data.data.length; i++) {
        store.ApiArray.push(res.data.data[i]);
      }
    });
  },

  mounted() {
    //console.log(store.ApiArray)


  }
}
</script>

<template>
  <div class="container-main" v-if="store.ApiArray.length > 0">
    <div class="topside">
      <AppMiddle></AppMiddle>
      <AppTopSide></AppTopSide>
      <div class="right-side" :class="store.isHoverMain ? 'visibily' : ''">
        <ul class="prices">
          <li class="mainli">Prezzi:</li>

          <li>Amazon: <strong>{{ store.ApiArray[store.globalIndex].card_prices[0].amazon_price }} $</strong></li>
          <li>Ebay: <strong>{{ store.ApiArray[store.globalIndex].card_prices[0].ebay_price }} $</strong></li>
          <li>CoolStuffing: <strong>{{ store.ApiArray[store.globalIndex].card_prices[0].coolstuffinc_price
          }} $</strong></li>
          <li>prezzo di Mercato: <strong>{{ store.ApiArray[store.globalIndex].card_prices[0].cardmarket_price }}
              $</strong>
          </li>

        </ul>

      </div>
    </div>
    <AppBottomSide></AppBottomSide>

  </div>
</template>

<style lang="scss" scoped>
@use './scss/variables' as *;

.container-main {
  display: flex;
  flex-direction: column;
  gap: 2em;
  justify-content: center;
  align-items: center;
  padding: 2em 1em;

  width: 100%;



  .topside {
    width: 100%;
    max-width: 1200px;

    display: flex;


    margin: 1em;
  }

  .right-side {
    width: 330px;
    display: flex;
    align-items: center;

    opacity: 0;
    transition: all .4s;

    .prices {
      width: 100%;
      list-style-type: none;

      li {
        color: rgb(182, 181, 181);
        border-bottom: 0px solid grey;
        padding: 1em 0;
      }

      .mainli {
        font-size: 1.2;
        font-weight: 700;
        color: $primary;
        text-transform: uppercase;
        border-bottom: 2px solid grey;
      }
    }
  }

  .visibily {
    opacity: 1;
  }

}
</style>
