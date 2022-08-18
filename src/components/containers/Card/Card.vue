<template>
  <section>
    <h1>Calcule seu IMC</h1>
    <Inputs/>
  </section>
</template>

<script>
import Inputs from '@/components/micro/Inputs/Inputs.vue';
export default {
    // eslint-disable-next-line
    name: "Card",
    components: { Inputs },


    methods:{
      getImc(){

      }
    }
}
</script>

<style scoped lang="scss">
@import './Card.scss';
</style>