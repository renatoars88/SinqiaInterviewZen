describe('Teste para sinqia', function(){
    beforeEach(function(){
        cy.visit('https://blogdoagi.com.br/')
    })

    it('verifica se o titulo está certo',function(){
        cy.get('.slide-search > .ast-icon > svg').click()
        cy.get('#search-field').type('Antena Digital{enter}')
        cy.get('.entry-title > a').should('be.visible').click()
       
    })
    it('ao clicar no resultado ele deve abrir a página', function(){
        cy.get('.slide-search > .ast-icon > svg').click()
        cy.get('#search-field').type('Antena Digital{enter}')
        cy.get('.entry-title > a').should('be.visible')  
        cy.get('entry-title > a').click() 
        cy.wait(2000)
    })
    it.only('título do artigo deve estar correto',function(){
        cy.visit('https://blogdoagi.com.br/antena-digital-do-governo/')
        cy.get('.entry-title').should('be.visible')
    })

})