// @ts-nocheck
describe('George spec 1 test', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')

    cy.contains('Sign In')
      .click()
  })
  it('find sign in link and click', () => {
    cy.contains('Sign In')
      .click()

    cy.url().should('include', '/sign-in')
  })
  it('make sure page contains fields', () => {
    cy.get('[placeholder="user name"]')

    cy.get('[placeholder="password"]')
  })
  it('sign in button works', () => {
    cy.get('button')
      .click()
    
    cy.url().should('include', '/my-courses')
  })
})