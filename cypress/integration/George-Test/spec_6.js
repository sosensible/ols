import { makeServer } from "../../../src/services/CourseService";

describe("George Spec Six editing main course detail", () => {
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

  const userLogin = (name) => {
    cy.contains("Sign In").click();
    cy.get("[data-testid=nameField]").type(name);
    cy.get("[data-testid=sign-in-button]").click();
  };
  beforeEach(() => {
    server = makeServer({ environment: "test" });
    cy.visit("http://localhost:2803/");
    setup();
  });
  afterEach(() => {
    server.shutdown();
  });
  it("checks for edit button if creator is logged in", () => {
    userLogin("George");
    cy.get(".card").click();
    cy.get("[data-testid=editButton]");
  });
  it("checks edit button is not there if not creator logged in", () => {
    userLogin("Duelavin");
    cy.get("[data-testid=editButton]").should("not.exist");
  });
  it("has editing fields if editing mode on", () => {
    userLogin("George");
    cy.get(".card").click();
    cy.get("[data-testid=editButton]").click();
    cy.get('[data-testid="Course Name"]');
    cy.get('[data-testid="Course shortDescription"]');
    cy.get('[data-testid="Course Price"]');
  });
  it("does not show add unit or units if editing", () => {
    userLogin("George");
    cy.get(".card").click();
    cy.get("[data-testid=editButton]").click();
    cy.get("[data-testid=addUnitButton]").should("not.exist");
    cy.contains("What is JavaScript").should("not.exist");
  });
  it("has save Changes button in course editing mode", () => {
    userLogin("George");
    cy.get(".card").click();
    cy.get("[data-testid=editButton]").click();
    cy.get("[data-testid=saveChanges]");
  });
  it("save changes button updates the vuex data turns of editing mode", () => {
    userLogin("George");
    cy.get(".card").click();
    cy.get("[data-testid=editButton]").click();
    cy.get('[data-testid="Course Name"]').clear().type("New Course 45");
    cy.get('[data-testid="Course shortDescription"]')
      .clear()
      .type("New Course 45 short Description");
    cy.get('[data-testid="Course Price"]').clear().type("45");
    cy.get("[data-testid=saveChanges]").click();
    cy.get("[data-testid=saveChanges]").should("not.exist");
    cy.get('[data-testid="Course Name"]').should("not.exist");
    cy.get('[data-testid="Course shortDescription"]').should("not.exist");
    cy.get('[data-testid="Course Price"]').should("not.exist");
    cy.contains("New Course 45");
    cy.contains("New Course 45 short Description");
    cy.contains("45");
  });
});
