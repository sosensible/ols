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
    updateUnits(state, units) {
      state.selectedCourse.units = units;
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
    async updateUnit({ commit, state }, unit) {
      let AlreadyUnits = state.selectedCourse.units;
      let unitsToAdd = [];
      let number = 0;
      for (let int in AlreadyUnits) {
        if (AlreadyUnits[int].name === unit.name) {
          number = 1;
          unitsToAdd.push(unit);
        } else {
          unitsToAdd.push(AlreadyUnits[int]);
        }
      }
      if (number != 1) {
        unitsToAdd.push(unit);
      }
      axios
        .patch("/api/courses/" + this.state.selectedCourse.id, unitsToAdd)
        .then(() => {
          commit("updateUnits", unitsToAdd);
        })
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
