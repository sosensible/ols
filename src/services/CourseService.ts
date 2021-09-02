/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import axios from "axios";
import { createServer, Model } from "miragejs";

createServer({
  models: {
    course: Model,
  },
  seeds(server) {
    server.create("course", {
      id: "4",
      name: "HTML basic",
      shortDescription: "Hyper Text Markup Language Basics",
      price: 30,
      lessons: [
        { name: "What is HTML", slug: "what_is_html" },
        { name: "Getting Started", slug: "getting_started" },
        { name: "text tags", slug: "text_tags" },
      ],
    });
    server.create("course", {
      id: "2",
      name: "Java Advanced",
      shortDescription: "Dont know what java stands for",
      price: 20,
      lessons: [
        { name: "What is JAVA", slug: "what_is_java" },
        { name: "java basics", slug: "java_basics" },
        { name: "java basic advanced", slug: "java_basic_advanced" },
        { name: "java advanced", slug: "java_advanced" },
      ],
    });
  },
  routes() {
    this.get("/api/courses", (schema) => {
      return schema.courses.all();
    });
    this.get("/api/courses/:id", (schema, request) => {
      const id = request.params.id;

      return schema.courses.find(id);
    });
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
