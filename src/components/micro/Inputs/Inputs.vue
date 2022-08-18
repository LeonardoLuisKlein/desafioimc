<template>
    <div id="inputs">
        <div class="formatInput" v-if="type === 'peso'">
            <div class="formatCard">
                <p>Peso</p>
                <p class="formatValue">65</p>
            </div>
            <input type="range" min="10" max="180">
        </div>
        <div class="formatInput" v-else-if="type === 'altura'">
            <div class="formatCard">
                <p>Altura</p>
                <p class="formatValue">1.64</p>
            </div>
            <input type="range" min="1.00" max="2.50" step="any">
        </div>
    </div>
</template>

<script>


export default {
    // eslint-disable-next-line
    name: "Inputs",
    props:{
        type:{
            type: String,
            default: "peso"
        }
    }
}
</script>

<style scoped lang="scss">
@import './Inputs.scss'
</style>