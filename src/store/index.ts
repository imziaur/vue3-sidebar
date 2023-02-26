import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 1,
  },
  getters: {},
  mutations: {
    decreaseCounter(state) {
      state.counter--;
    },
    increaseCounter(state) {
      state.counter++;
    },
  },
  actions: {},
  modules: {},
});
