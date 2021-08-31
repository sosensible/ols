describe("bob spec 3", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/courses");
    cy.get('[href="/course/1"] > div').click();
  });
  it("checks for lessons", () => {
    //write code that checks for lessons
    cy.get('.lessonArray')
  });
});
