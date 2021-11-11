import { makeServer } from "../../../src/services/CourseService";

describe("bob spec 2 tests", () => {
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
            },
          ],
        },
      ],
    });
  };
  beforeEach(() => {
    server = makeServer({ environment: "test" });
    setup();
    cy.visit("http://localhost:2803");
  });

  afterEach(() => {
    server.shutdown();
  });
  it("shows the courses from server", () => {
    cy.contains("Courses").click();

    cy.contains("Bootstrap");
    cy.contains("JavaScript");
  });
  it("goes to correct link when course clicked", () => {
    cy.contains("Courses").click();

    cy.contains("Bootstrap").click();
    cy.url().should("include", "/4");
  });
  it("course detail page shows course title", () => {
    cy.contains("Courses").click();
    cy.contains("Bootstrap").click();
    cy.url().should("include", "/4");
    cy.contains("Bootstrap");
  });
});
