import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        medicament_1: 0,
        medicament_2: 0,
        medicament_3: 0,
    },
    mutations: {
        increaceMedicamentCount(state, medicament) {
            state[medicament]++
        },
        cleanState(state) {
            state.medicament_1 = 0
            state.medicament_2 = 0
            state.medicament_3 = 0
        },
    },
    getters: {},
    actions: {},
})
