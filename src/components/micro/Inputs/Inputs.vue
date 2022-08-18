<template>
    <div id="inputs">
        <div class="formatInput" v-if="type === 'peso'">
            <div class="formatCard">
                <p>Peso</p>
                <p class="formatValue">65</p>
            </div>
            <input type="range" min="10" max="180" @input="getValue">
        </div>
        <div class="formatInput" v-else-if="type === 'altura'">
            <div class="formatCard">
                <p>Altura</p>
                <p class="formatValue">1.64</p>
            </div>
            <input type="range" min="1.00" max="2.50" step="any" @input="getValue">
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    // eslint-disable-next-line
    name: "Inputs",
    props: {
        type: {
            type: String,
            default: "peso"
        }
    },
    methods: {
        ...mapActions(["setPeso", "setAltura"]),
        getValue(e) {
            switch (this.id) {
                case "peso":
                    this.setPeso(e.target.value);
                    break;
                case "altura":
                    this.setAltura(e.target.value);
                    break;
            }
        }
    },
    mounted(){
        console.log(this.peso)
    }
}
</script>

<style scoped lang="scss">
@import './Inputs.scss'
</style>