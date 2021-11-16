import { makeServer } from "../../../src/services/CourseService";

describe("George Spec Five Adding Lessons", () => {
  let server;

  const setup = () => {
    server.create("user", {
      id: "2643",
      name: "George",
      accountType: "creator",
      password: "L7rk$G30%",
      courses: [],
    });
    server.create("course", {
      id: 3,
      name: "JavaScript",
      shortDescription: "Short Description of JavaScript Course",
      price: 39,
      creator: "George",
      units: [
        {
          name: "What is JavaScript",
          slug: "what_is_javascript",
          lessons: [
            {
              name: "What is JavaScript Lesson1",
              slug: "lesson_1",
            },
            {
              name: "We Lesson1",
              slug: "we_lesson1",
            },
          ],
        },
      ],
    });
  };

  beforeEach(() => {
    server = makeServer({ environment: "test" });
    cy.visit("http://localhost:2803/");
    setup();
    cy.contains("Sign In").click();
    cy.get("#name").type("George");
    cy.get("[data-testid=sign-in-button]").click();
    cy.get(".card").click();
    cy.contains("What is JavaScript").click();
    cy.contains("Edit Unit").click();
    cy.contains("Add Lesson").click();
  });
  it("checks for lesson fields", () => {
    cy.get("[data-testid=nameInput]");
    cy.get("[data-testid=slugInput]");
    cy.get("[data-testid=contentInput]");
  });
  it("types field and saves lesson", () => {
    cy.get("[data-testid=nameInput]").type("lesson 2");
    cy.get("[data-testid=slugInput]").type("lesson_2");
    cy.get("[data-testid=contentInput]").type("lesson 2 content");
    cy.get("[data-testid=saveButton]").click();
  });
});
