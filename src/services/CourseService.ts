/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from 'axios'
import { createServer, Model } from "miragejs"

createServer({
  models: {
    course: Model,
  },
  seeds(server) {
    server.create("course", {
      name: "HTML basic",
      shortDescription: "Hyper Text Markup Language Basics",
      price: 30,
      lessons: [
        { name: "lesson 1" },
        { name: "lesson 2" },
        { name: "lesson 3" },
      ],
    });
    server.create("course", {
      name: "Java Advanced",
      shortDescription: "Dont know what java stands for",
      price: 20,
      lessons: [
        { name: "lesson 1" },
        { name: "lesson 2" },
        { name: "lesson 3" },
        { name: "lesson 4" },
        { name: "lesson 5" },
      ],
    });
  },
  routes() {
    this.get("/api/courses", (schema) => {
      return schema.courses.all();
    });
  },
});
const apiClient = axios.create({});

export default {
  getCourses() {
    return apiClient.get("/api/courses/");
  },
};
