<script>
import { store } from './store';
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

  created() {

  }
}
</script>

<template>
  <div class="container-main">
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
  align-items: center;
  padding: 2em 1em;

  .topside {
    width: 100%;
    max-width: 800px;
  }

}
</style>
