import { createServer, Model } from "miragejs";

export function makeServer({ environment = "development" } = {}) {
  // eslint-disable-next-line prefer-const
  let server = createServer({
    environment,
    models: {
      course: Model,
      user: Model,
    },
    seeds(server) {
      server.create("user", {
        id: "356",
        name: "Julio",
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
          {
            name: "Getting Started",
            slug: "getting_started",
            lessons: [
              { name: "Lesson One", slug: "lesson_one" },
              { name: "Lesson Two", slug: "lesson_two" },
            ],
          },
          {
            name: "text tags",
            slug: "text_tags",
            lessons: [
              { name: "Lesson One", slug: "lesson_one" },
              { name: "Lesson Two", slug: "lesson_two" },
              { name: "Lesson Three", slug: "lesson_three" },
            ],
          },
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
  return server;
}

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
        { name: "What is HTML", slug: "what_is_html", lessons: [] },
        {
          name: "Getting Started",
          slug: "getting_started",
          lessons: [
            { name: "Lesson One", slug: "lesson_one" },
            { name: "Lesson Two", slug: "lesson_two" },
          ],
        },
        {
          name: "text tags",
          slug: "text_tags",
          lessons: [
            { name: "Lesson One", slug: "lesson_one" },
            { name: "Lesson Two", slug: "lesson_two" },
            { name: "Lesson Three", slug: "lesson_three" },
          ],
        },
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
    this.post("/api/courses", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.courses.create(attrs.course);
    });
    this.patch("/api/courses/:id", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      const id = request.params.id;
      return schema.courses.find(id).update(attrs);
    });
  },
});
