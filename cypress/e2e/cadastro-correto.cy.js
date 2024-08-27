  describe('Página de cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
        cy.title().should('eq', 'AdoPet');
        cy.contains('p', 'Quem ama adota!').should('be.visible');
    })

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('Daniel', 'email@teste.com', 'Pass123456');

  })

})