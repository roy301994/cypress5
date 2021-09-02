import "cypress-file-upload"

Cypress.Commands.add('BukaURL', () => { 
    cy.visit('https://www.demoblaze.com/index.html')
 })

Cypress.Commands.add('login', () => { 
    cy.visit('https://admin.pkh.dojobox.id/')
        cy.get('#input-email').type('e@dojobox.id')
        cy.get('#input-password').type('admin')
        // cy.wait(10000)
        cy.get('#btn-login').click()
 })

