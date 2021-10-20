import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "",
      password: "",
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    createUser({ commit }, user) {
      commit("setUser", user);
    },
  },
  modules: {},
});
