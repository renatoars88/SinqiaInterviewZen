describe('Teste para sinqia', function(){
    beforeEach(function(){
        cy.visit('https://blogdoagi.com.br/')
    })

    it('verifica se o titulo está certo',function(){
        cy.get('.slide-search > .ast-icon > svg').click()
        cy.get('#search-field').type('Antena Digital{enter}')
        cy.get('.entry-title > a').should('be.visible').click()
       
    })

    
})