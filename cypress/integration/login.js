describe('adminDojobox', function () {
    it('login testing 1', function () {
        cy.visit('https://admin.pkh.dojobox.id/')
        cy.get('#input-email').type('e@dojobox.id')
        cy.get('#input-password').type('admin')
        cy.wait(10000)
        cy.get('#btn-login').click()
    })
})