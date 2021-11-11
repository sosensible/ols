import { makeServer } from "../../../src/services/CourseService";

describe("bob spec 2 tests", () => {
  let server;
  beforeEach(() => {
    server = makeServer({ environment: "test" });
    cy.visit("http://localhost:2803");
  });

  afterEach(() => {
    server.shutdown();
  });
  it("shows the courses from server", () => {
    server.create("course", { id: 3, name: "JavaScript" });
    server.create("course", { id: 4, name: "Bootstrap" });

    cy.contains("Courses").click();

    cy.contains("Bootstrap");
    cy.contains("JavaScript");
  });
});
