/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'
import { createServer } from "miragejs"

createServer({
  routes() {
    this.get("/api/courses", () => ({
      courses: [
        {
          id: 1,
          name: "HTML Learning Basics",
          shortDescription: "this is the short description of Html basics",
          price: 30,
        },
      ],
    }));
  },
});
const apiClient = axios.create({});

export default {
  getCourses() {
    return apiClient.get("/api/courses/");
  },
  getCourse(id) {
    return apiClient.get("/api/courses/" + id);
  },
};
