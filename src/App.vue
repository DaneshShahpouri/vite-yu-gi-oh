<script>
import { store } from './store'
import AppTopSide from './components/AppTopSide.vue';


export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppTopSide,
  }
}
</script>

<template>
  <div>
    <AppTopSide></AppTopSide>
    {{ store.title }}
  </div>
</template>

<style scoped></style>
