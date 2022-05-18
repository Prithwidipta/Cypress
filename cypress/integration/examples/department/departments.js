/// <reference types="Cypress" />
import { Given, When, And,Then  } from 'cypress-cucumber-preprocessor/steps'

// User Login
Given('Open Portal', () => {
  cy.visit(Cypress.env('URL'))
  cy.wait(5000)
})

When('Enter Username & Password', () => {
  cy.get('input[name="username"]').type(Cypress.env('departmentuser'))
  cy.get('input[name="password"]').type(Cypress.env('departmentpassword'))
})

And('Validate & Login', () => {
  cy.get('.button').click()
})

Then('Verify Login Status', () => {
  cy.url().should('include', 'department')
})
// When Select User form User List
When('Select User form User List', () => {
  cy.get('tr td:nth-child(1)')
    .eq(0).as('userRoute')
  cy.waitFor('@userRoute')
  cy.get('@userRoute').click()
  
})
// Varify User Url
And('Verify User Url', function() {
  cy.url().should('include',"users")
})
// Then Come back to Dashboard
Then('Come Back To Dashboard', function() {
  cy.go('back')
  cy.wait(3000)
})