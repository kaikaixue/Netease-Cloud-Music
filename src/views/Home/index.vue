<template>
  <div class="home-container">
    <Header/>
  </div>
</template>


<script>
import Header from './components/Header.vue'
export default {
  components: {
    Header
  },
  setup() {
    
  },
}
</script>

<style lang="scss" scoped>
.home-container {
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}
</style>