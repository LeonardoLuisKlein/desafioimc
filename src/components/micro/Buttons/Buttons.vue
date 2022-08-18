<template>
  <button v-on:click="clickButton">Calcular</button>
</template>

<script>
export default {
    // eslint-disable-next-line
    name: "Buttons",
    props:{
        clickButton: String
    }
}
</script>

<style scoped lang="scss">
@import './Buttons.scss'
</style>