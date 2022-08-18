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
                <Buttons :clickButton="IMC" />
            </div>
        </div>
        <h2>IMC: {{ imc }} ({{ resultado }}) </h2>
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
            imc: "23.51",
            resultado: "Peso Normal"
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

        IMC() {
            let result = this.peso / (this.altura * this.altura)
            this.imc = result.toFixed(2)
            if (this.imc <= 18.5) {
                this.resultado = "Abaixo do Peso";
            } else if (this.imc <= 24.9) {
                this.resultado = "Peso Normal";
            } else if (this.imc <= 29.9) {
                this.resultado = "Sobrepeso";
            } else if (this.imc <= 34.9) {
                this.resultado = "Obesidade Grau I";
            } else if (this.imc <= 39.9) {
                this.resultado = "Obesidade Grau II";
            } else if (this.imc > 40) {
                this.resultado = "Obesidade Mórbida";
            }
        }
    },
};
</script>

<style scoped lang="scss">
@import "./Inputs.scss";
</style>