import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    med1Count: 0,
    med2Count: 0,
    med3Count: 0,
  },
  mutations: {
    increaceMed1Count(state) {
      state.med1Count++;
    },
    increaceMed2Count(state) {
      state.med2Count++;
    },
    increaceMed3Count(state) {
      state.med3Count++;
    },
    cleanState(state) {
      state.med1Count = 0;
      state.med2Count = 0;
      state.med3Count = 0;
    },
  },
  getters: {
  },
  actions: {},
});
