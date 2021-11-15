import { makeServer } from "../../../src/services/CourseService";
describe("George spec 4 test", () => {
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
    cy.get("[data-testid=nameField]").type("George");
    cy.get("[data-testid=sign-in-button]").click();
    cy.get(".card").click();
    cy.contains("Add Unit").click();
  });

  afterEach(() => {
    server.shutdown();
  });
  it("page moves to addUnit page when addunit button clicked", () => {
    cy.url().should("include", "/editCourse/3");
  });
  it("has unit fields", () => {
    cy.get("[data-testid=unitNameField]").type("Learning Java P1");
  });
  it("saves added unit", () => {
    cy.get("[data-testid=unitNameField]").type("Learning Java P1");
    cy.get("[data-testid=saveButton]").click();
    cy.contains("Learning Java P1");
  });
});
