import { When,Then,And, Given } from 'cypress-cucumber-preprocessor/steps'
When("Click on the Create User Button and Enter User Details", function() {
    cy.get('.buttons > :nth-child(1)').click()
    cy.get('input[name="newUserId"]').type(this.data.userId)
    cy.get('.is-success').should("be.disabled")
    cy.get('input[name=lastName]').type(this.data.firstName)
    cy.get('.is-success').should("be.disabled")
    cy.get('input[name=firstName]').type(this.data.firstName)
    cy.get('.is-success').should("be.disabled")
    cy.get('input[name=callingLineIdLastName]').type(this.data.lastName)
    cy.get('.is-success').should("be.disabled")
    cy.get('input[name=callingLineIdFirstName]').type(this.data.lastName)
    cy.get('.is-success').should("be.disabled")
    cy.get(':nth-child(1) > :nth-child(2) > .button').click()
    cy.get('.is-success').should("not.be.disabled")
    cy.wait(1000)
    cy.get('.tabs > ul > :nth-child(2) > a').click()
    cy.get(':nth-child(1) > :nth-child(2) > .input').should("be.disabled")
    cy.get('select[name="timeZone"]').select("(GMT) Greenwich Mean Time")
    cy.get('input[name="title"]').type("Odin Testing")
    cy.get('input[name="emailAddress"]').type(this.data.email)
    cy.get('select[name="stateOrProvince"]').select("Alaska").should("have.value", "Alaska")
    cy.get('.is-success').click()
   })
// And Verify User Created Successfully
And("Verify User Created Successfully", () => { 
    cy.get('.app-alerts__StyledAlert-sc-1oosbep-1').should("have.text", "User Created")
    cy.wait(1000)
})
// And Verify User Url
And("Verify User Url", () => { 
    cy.get('tr td:nth-child(1)').eq(0).as('userRoute')
  cy.waitFor('@userRoute')
    cy.get('@userRoute').click()
    cy.url().should('include', 'TestDepartment@parkbenchsolutions.com')
})
// And Delete User
And("Delete User", () => { 
    cy.get(':nth-child(6) > :nth-child(6) > a').click()
    cy.get('.button').click()
    cy.get('.is-danger').click()
    cy.contains("Yes, I'm sure").click()
    
})
// Then Varify Url after Deleting and Come Back To User List
    
Then("Verify Url after Deleting", () => {
    cy.url().should('include', 'department')
    }) 
// Then  Come Back To User List
Then("Come Back To User List", () => {
    cy.get('ul > :nth-child(1) > a').click({ force: true })
}) 