import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {
      name: "",
      password: "",
      courses: [],
    },
    courses: [],
    error: null,
    selectedCourse: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    addUnitToSelectedCourse(state, unit) {
      state.selectedCourse.units.push(unit);
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
    addCourse(state, course) {
      state.courses.push(course);
      state.user.courses.push(course);
    },
  },
  actions: {
    async addUnitToCourse({ commit }, unit) {
      //need to add unit to the api
      console.log("add unit to course action");
      await commit("addUnitToSelectedCourse", unit);
      axios
        .patch(
          "/api/courses/" + this.state.selectedCourse.id,
          this.state.selectedCourse.units
        )
        .catch((error) => {
          commit("setError", error);
        });
    },
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
        .post("/api/courses/", {
          course,
        })
        .then((reponse) => {
          (course.id = reponse.data.course.id), commit("addCourse", course);
        })
        .catch((error) => {
          commit("setError", error);
        });
    },
  },
  modules: {},
  getters: {
    getCourseByUser: (state) => () => {
      return state.courses;
    },
  },
});
