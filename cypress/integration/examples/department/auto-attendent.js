/// <reference types="Cypress" />
import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps'
// When Navigate to attendent
When('Navigate to attendent', () => {
    cy.get(
        '.app-breadcrumb__StyledBreadcrumb-sc-nqfjrv-0 > ul > :nth-child(1) > a'
    ).click({ force: true })
    cy.get('.columns ul > li a[href]').each(($el, index, $list) => {
        console.log('$el.text()', $el.text())
        console.log($el.text().includes('Auto Attendant'))
        if ($el.text().includes('Auto Attendant')) {
            cy.get($el).click()
        }
    })
})
//  And Enable & Desible
And('Enable & Desible', () => {
   
        cy.get('input[type="checkbox"]').then(function(value) {
          const checkboxStatus = value.prop('checked')
          if (checkboxStatus) {
            cy.get('input[type="checkbox"]').click({ force: true })
            cy.get('input[type="checkbox"]').should('not.be.checked')
            cy.get('input[type="checkbox"]').click({ force: true })
          } else {
            cy.get('input[type="checkbox"]').click({ force: true })
            cy.get('input[type="checkbox"]').should('be.checked')
          }
        })
      

})
// And Click on Auto Attendent
And('Click on Auto Attendent', () => { 
    cy.wait(800)
    cy.get('tbody > tr ')
      .each(($el, index, $list) => {
        if (index == 0) {
          cy.get($el).click()
        }
      })
      .as('autoAttendent')
    cy.waitFor('@autoAttendent')
    cy.intercept({
      method: 'GET',
      url: `${Cypress.env('api')}/groups/auto-attendants?*`
    }).as('autoAttendentClick')
    cy.wait('@autoAttendentClick').should(({ request, response }) => {
      expect(response.statusCode).to.equal(200)
    })

})
    // When Auto Attendent : Navigate to After Hour Menu
    Then('Edit Audio Setting', function () {
    cy.get(':nth-child(1) > .card-header > .card-header-icon > .buttons > .button').click()
        cy.get('.ui-input-checkbox__StyledLabel-sc-afwye0-0 > .button').click()
        cy.get('.buttons > .is-success').click()
    })
// And Add Auto Attendent Menu Keys
And('Add Auto Attendent Menu Keys', () => {  cy.wait(3000)
    cy.get(':nth-child(3) > .card-header > .card-header-icon > .buttons > .button').click({force:true})
    cy.wait(500)
    cy.get(':nth-child(1) > :nth-child(2) > .select > select').select('7')
    cy.get(':nth-child(2) > :nth-child(2) > .select > select').select('Repeat Menu')
    cy.get('.modal-card-body > :nth-child(3) > :nth-child(2) > .input').type('Testing')
    cy.get('.modal-card-foot > .buttons > :nth-child(1)').click()
 })
// And Update Auto Attendent Menu Keys
And('Update Auto Attendent Menu Keys', () => {
    cy.wait(200)
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        if ($el.text() == 'Transfer To Operator') {
            cy.get($el).click()
        }
    })
    cy.get(':nth-child(1) > :nth-child(2) > .select > select').select('8')
    cy.get('.modal-card-body > :nth-child(3) > :nth-child(2) > .input').type('test')
    cy.get('.buttons > :nth-child(2)').click()
})
//  And Delete Auto Attendent Menu Keys
Then('Delete Auto Attendent Menu Keys', () => { 
    cy.wait(200)
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        if ($el.text() == 'Repeat Menu') {
            cy.get($el).click()

        } 
        cy.get('.buttons > :nth-child(2)')
    })
    
})