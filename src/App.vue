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
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");

html,
body,
#app {
 background: linear-gradient(116.82deg, rgba(245, 196, 71, 0.7) 0%, rgba(245, 197, 78, 0.6) 100%);
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  display: flex;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

#app::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 45px;
    height: 45px;
    accent-color: #f7b718;
    cursor: pointer;
}
</style>
