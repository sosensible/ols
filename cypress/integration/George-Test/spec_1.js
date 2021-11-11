import { makeServer } from "../../../src/services/CourseService";
describe("George spec 1 test", () => {
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
    cy.visit("http://localhost:2803/");
    setup();
    cy.contains("Sign In").click();
  });
  afterEach(() => {
    server.shutdown();
  });
  it("find sign in link and click", () => {
    cy.url().should("include", "/sign-in")
  });
  it("make sure page contains fields", () => {
    cy.get("#name");
    cy.get("#password");
  });
  it("sign in button works", () => {
    cy.get("[data-testid=sign-in-button]").click();
    cy.url().should("include", "/my-courses");
  });
});
