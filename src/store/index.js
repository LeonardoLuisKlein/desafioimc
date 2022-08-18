import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    peso: "",
    altura: "",
  },
  getters: {},
  mutations: {
    setPeso(state, peso) {
      localStorage.setItem("peso", peso);
    },
    setAltura(state, altura) {
      localStorage.setItem("altura", altura);
    },
  },
  actions: {
    setPeso({ commit }, peso) {
      commit("setPeso", peso);
    },
    setAltura({ commit }, altura) {
      commit("setAltura", altura);
    },
  },
  modules: {},
});
