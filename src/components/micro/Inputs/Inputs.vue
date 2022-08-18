<template>
    <div id="inputs">
        <div class="formatInput">
            <div class="formatCard">
                <p>Peso</p>
                <p class="formatValue">{{ this.peso }}</p>
            </div>
            <input type="range" min="10" max="180" @change="getImc" id="peso" />
        </div>
        <div class="formatInput">
            <div class="formatCard">
                <p>Altura</p>
                <p class="formatValue">{{ this.altura }}</p>
            </div>
            <input type="range" min="1.00" max="2.50" step="0.01" @change="getImc" id="altura" />
            <div>
                <Buttons />
                <h2>IMC: </h2>
            </div>
        </div>

    </div>
</template>

<script>
import Buttons from "../Buttons/Buttons.vue";


export default {
    // eslint-disable-next-line
    name: "Inputs",
    components: { Buttons },
    props: {
        type: {
            type: String,
            default: "peso",
        },
    },
    data() {
        return {
            peso: "64",
            altura: "1.65",
        };
    },
    methods: {
        getImc() {
            this.peso = document.getElementById("peso").value;
            const getAltura = document.getElementById("altura").value;
            this.altura = getAltura;
            console.log(this.peso);
            console.log(this.altura);
        },
    },
};
</script>

<style scoped lang="scss">
@import "./Inputs.scss";
</style>