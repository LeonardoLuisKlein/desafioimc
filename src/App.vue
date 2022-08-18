<template>
  <div id="app">
    <Card />
  </div>
</template>

<script>
import Card from '@/components/containers/Card/Card.vue'

export default {
  components: {
    Card
  }
}
</script>


<style lang="scss">

html,
body,
#app {
  height: 100vh;
  background: linear-gradient(116.82deg, rgba(247, 183, 24, 0.7) 0%, rgba(245, 197, 78, 0.6) 100%);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
</style>
