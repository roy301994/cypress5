describe('Task 5',()=>{
    it('Task 5',()=>{
        cy.openurl()
    })

    it('Isi form',()=>{
        cy.get('#firstName').type('roy').should('have.value','roy')
        cy.get('#lastName').type('arto').should('have.value','arto')
        cy.get('#userEmail').type('arto@sasongko.com').should('have.value','arto@sasongko.com')
        cy.get('#genterWrapper > .col-md-9 > :nth-child(1) > .custom-control-label').click()
        cy.get('#userNumber').type('12345').should('have.value','12345')
        cy.get('#dateOfBirthInput').should('be.visible').type('21 Aug 2000',{force:true})
        cy.get('#dateOfBirthInput').type('21 Aug 2000')
        cy.get('datepicker__year-select').contains('2000').click()

        cy.get('#dateOfBirthInput').type('21 Jul 2000')
        .should('have.value','21 jul 2000')
        cy.get('.subjects-auto-complete__value-container').type('mahasiswa').should('have.value','mahasiswa')
        cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click()
       

    })
})