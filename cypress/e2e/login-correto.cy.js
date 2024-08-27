describe('Página de login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        //cy.visit('https://google.com');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.login('ana@email.com', 'Senha123')
    })
})