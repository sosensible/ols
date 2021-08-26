describe("bob spec 2 tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/courses");
  });
  it("make sure components are there", () => {
    cy.get('[href="/course/1"] > div');
  });
  it("check componet goes to correct page", () => {
    cy.get('[href="/course/1"] > div').click();

    cy.url().should("include", "/1");
  });
});
