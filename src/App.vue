<script>
import { store } from './store';
import axios from 'axios';

import AppTopSide from './components/AppTopSide.vue';
import AppBottomSide from './components/AppBottomSide.vue';


export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppTopSide,
    AppBottomSide,
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
      <AppTopSide></AppTopSide>
    </div>
    <AppBottomSide></AppBottomSide>

  </div>
</template>

<style lang="scss" scoped>
.container-main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2em 1em;

  width: 100%;
  height: 100vh;


  .topside {
    width: 100%;
    max-width: 800px;

  }

}
</style>
