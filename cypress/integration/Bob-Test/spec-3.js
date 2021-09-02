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
    cy.get(':nth-child(4) > a > p')
      .click()

    cy.url().should("contain", "lesson");
  });
  it.only("checks that we are on course/lesson page", () => {
    //write code to check we are on course lesson
    cy.get(":nth-child(4) > a > p").click();

    cy.contains("This Lessons Name")
  });
});
