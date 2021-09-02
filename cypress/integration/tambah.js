

describe('adminDojobox', function () {
    it('Tambah Facilitator', function () {
        cy.login()
        cy.get('.d-flex > .btn').click()
        cy.wait(5000)
        cy.get('input[type="file"]').attachFile('44-stainless-gold-milanese-gold-s4-grid.jpg')
        cy.get('#user_fullname').type('roy naldo').should('have.value','roy naldo')
        cy.get('#user_email').type('roynaldositansgtf5@gmail.com').should('have.value','roynaldositansgtf5@gmail.com')
        cy.get('#user_is_active').select('Aktif')
        cy.get('#user_password').type('admin').should('have.value','admin')
        cy.get('#user_province_id').select('JAWA BARAT')
        cy.get('#user_city_id').select('KOTA BANDUNG')
        cy.get('#user_subdistrict_id').select('Cicendo')
        cy.get('#user_address').type('jl kosambi').should('have.value','jl kosambi')
        cy.get('.py-2',{force:true}).click()
        cy.get('#add').click()
        cy.get('#generalModal > .modal-dialog > .modal-content > .modal-header > .close > span',{force:true}).click()
    })
})