import { createServer, Model } from "miragejs";

createServer({
  models: {
    course: Model,
    user: Model,
  },
  seeds(server) {
    server.create("user", {
      id: "2643",
      name: "George",
      accountType: "creator",
      password: "L7rk$G30%",
      courses: [],
    });
    server.create("course", {
      id: "3",
      name: "HTML basic",
      shortDescription: "Hyper Text Markup Language Basics",
      price: 30,
      creator: "George",
      units: [
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
      creator: "Duelvin",
      units: [
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
    let newId = 4;
    this.post("/api/courses", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      attrs.id = newId++;
      return { course: attrs };
    });
    this.patch("/api/courses/:id", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const id = request.params.id;
      return schema.courses.find(id).update(attrs);
    });
  },
});
