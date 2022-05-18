import { When,And, Then } from "cypress-cucumber-preprocessor/steps";
// When Navigate To Dashboard
When('Navigate To Dashboard', () => {
    cy.get('.app-breadcrumb__StyledBreadcrumb-sc-nqfjrv-0 > ul > :nth-child(1) > a').click({ force: true })
    cy.wait(1000)
})
And('Navigate to Common List', () => {
    cy.get(':nth-child(6) > :nth-child(1) > a > span').click()

})

And('Add Common Phone', () => {
    cy.get('.buttons > :nth-child(1)').click()
    cy.get(':nth-child(1) > :nth-child(2) > .input').type('Test')
    cy.get(':nth-child(2) > :nth-child(2) > .input').type('11')
    cy.get('.is-success').click()
    cy.wait(1000)
    
})

And('Update Common Phone', () => {
    cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
        if ($el.text().includes('Test')) {
            cy.get($el).click()
            cy.get(':nth-child(1) > :nth-child(2) > .input').clear().type('Testing')
            cy.get(':nth-child(2) > :nth-child(2) > .input').clear().type('12')
           
        }
    })
})

And('Delete Common Phone', () => {
    cy.wait(500)
    cy.get('tr td:nth-child(1)').each(($el, index, $list) => {
        if ($el.text().includes('Test')) {
            cy.get($el).click()
        }
    })
            cy.get('button.button.is-danger').click()
            cy.get(':nth-child(3) > .modal-card > .modal-card-foot > .buttons > .is-success').click()
            // cy.request('/groups/common-phone-list', ':nth-child(3) > .modal-card > .modal-card-foot > .buttons > .is-success', 200, 'commPhone', 'DELETE').as('delete')
            // cy.waitFor('@delete')
           
})
// And('Validating Add Number', () => {
//     cy.get('.buttons > :nth-child(1)').click()
//     cy.get('.modal-card-foot > .buttons :last-child').should('be.disabled')
//     cy.get('input[name=newName]').type('abc')
//     cy.get('.modal-card-foot > .buttons :last-child').should('be.disabled')
//     cy.get('input[name=phoneNumber]').type('123')
//     cy.get('.modal-card-foot > .buttons :last-child').should('be.enabled')
// })

// And('Upload CSV : Phone List', () => {
//     let attachFileName="phone list.csv"
//     cy.get('.buttons > :nth-child(2)').click()
//     cy.get('input[id=uploadCSV]').attachFile(attachFileName)
//     cy.httpRespStatus('/groups/common-phone-list', '.modal-card-foot > .buttons :last-child', 200, 'csvUpload', 'POST')
// })

Then('Delete List', () => {
    cy.wait(200)
    cy.get('tr td:nth-child(1)').each(($el, index, $list) => {
        cy.get($el).click()
        cy.get('button.button.is-danger').click()
        cy.get(':nth-child(3) > .modal-card > .modal-card-foot > .buttons > .is-success').click()
        // cy.request('/groups/common-phone-list', ':nth-child(3) > .modal-card > .modal-card-foot > .buttons > .is-success', 200, 'commPhone', 'DELETE').as('csvListDelet')
        // cy.waitFor('@csvListDelet')
    })
})
