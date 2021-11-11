import { makeServer } from "../../../src/services/CourseService";
describe("bob spec 3", () => {
  let server;

  const setup = () => {
    server.create("course", {
      id: 3,
      name: "JavaScript",
      shortDescription: "Short Description of JavaScript Course",
      price: 39,
      units: [
        {
          name: "What is JavaScript",
          slug: "what_is_javascript",
          lessons: [
            {
              name: "What is JavaScript Lesson1",
              slug: "lesson_1",
              content: "this is the content for what is JavaScript lesson 1",
            },
          ],
        },
      ],
    });
    server.create("course", {
      id: 4,
      name: "Bootstrap",
      shortDescription: "Short Description of Bootstrap Course",
      price: 39,
      units: [
        {
          name: "What is Bootstrap",
          slug: "what_is_bootstrap",
          lessons: [
            {
              name: "what is bootstrap Lesson1",
              slug: "lesson_1",
              content: "this is the content for what is JavaScript lesson 1",
            },
          ],
        },
      ],
    });
  };
  beforeEach(() => {
    cy.visit("http://localhost:2803/courses");
    server = makeServer({ environment: "test" });
    setup();
    cy.contains("Bootstrap").click();
    cy.contains("What is Bootstrap").click();
  });
  it("opens a unit lesson", () => {
    cy.contains("what is bootstrap Lesson1").click();
  });
  it("has the lesson information on lesson page", () => {
    cy.contains("what is bootstrap Lesson1").click();
    cy.contains("what is bootstrap Lesson1");
    cy.contains("this is the content for what is JavaScript lesson 1");
  });
});
