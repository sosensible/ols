import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "",
      password: "",
    },
    courses: [],
    error: null,
    selectedCourse: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setCurrentCourse(state, course) {
      state.selectedCourse = course;
    },
    setCourses(state, courses) {
      state.courses = courses;
    },
    setError(state, error) {
      state.error = error;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    addCourse(state, course) {
      state.courses.push();
      console.log(state.courses);
    },
  },
  actions: {
    createUser({ commit }, user) {
      commit("setUser", user);
    },
    createCurrentCourse({ commit }, course) {
      commit("setCurrentCourse", course);
    },
    createCourses({ commit }) {
      axios
        .get("/api/courses/")
        .then(({ data }) => {
          commit("setCourses", data.courses);
        })
        .catch((error) => {
          commit("setError", error);
        });
    },
    createCourse({ commit }, course) {
      axios
        .post("/api/courses", {
          id: 49,
          name: course.name,
          shortDescription: course.description,
        })
        .then(() => {
          commit("addCourse", course);
        })
        .catch((error) => {
          commit("setError", error);
        });
    },
  },
  modules: {},
});
