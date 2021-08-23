describe('bob spec 1 test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
  })

  it('find course link and click', () => {
    cy.contains('Courses')
      .click()

    cy.url().should('include', '/courses')
  })
})