describe("George second spec test", () => {
  beforeEach(() => {
    cy.visit("http://localhost:2803/my-courses");
  });
  it("has add a course button", () => {
    cy.get("[data-testid=newCourseButton]");
  });
  it("when button clicks goes to course creation page", () => {
    cy.get("[data-testid=newCourseButton]").click();

    cy.url().should("include", "/new-course");
    cy.url().should("include", "new-course");
  });
});
