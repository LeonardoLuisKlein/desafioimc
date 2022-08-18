<template>
  <section>
    <h1>Calcule seu IMC</h1>
    <Inputs/>
    <Inputs type="altura"/>
  </section>
</template>

<script>
import Inputs from '@/components/micro/Inputs/Inputs.vue';
export default {
    // eslint-disable-next-line
    name: "Card",
    components: { Inputs }
}
</script>

<style scoped lang="scss">
@import './Card.scss';
</style>