describe("George second spec test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:2803/my-courses");
  });
  it("has add a course button", () => {
    cy.contains("Create New Course");
  });
  it("when button clicks goes to course creation page", () => {
    cy.get("button").click();

    cy.url().should("include", "/new-course");
    cy.contains("New Course");
  });
});
