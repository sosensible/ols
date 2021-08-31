describe("bob spec 3", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/courses");
    cy.get('[href="/course/1"] > div').click();
  });
  it("checks for lessons", () => {
    //write code that checks for lessons
    cy.get('.lessonArray')
  });
  it("click a lesson, route changes to course/lesson", () => {
    //write code that chekcs for route change on lesson click
    cy.get('.lessonArray > :nth-child(1)')
      .click()

    cy.url().should("contain", "course/lesson");
  });
});
