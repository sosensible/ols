import Vue from "vue";
import Vuex from "vuex";
import CourseService from "../services/CourseService"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "",
      password: "",
    },
    courses: [],
    error: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setCourses(state, courses) {
      state.courses = courses;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    createUser({ commit }, user) {
      commit("setUser", user);
    },
    createCourses({ commit }) {
      CourseService.getCourses()
        .then(({ data }) => {
          commit("setCourses", data.courses);
        })
        .catch((error) => {
          commit("setError", error);
        });
    },
  },
  modules: {},
});
