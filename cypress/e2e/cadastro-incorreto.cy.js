describe('Página de cadastro', () => {
  beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app');
      cy.get('[data-test="register-button"]').click();
      cy.title().should('eq', 'AdoPet');
      cy.contains('p', 'Quem ama adota!').should('be.visible');
  })

    it('Preencher os campos do formulário incorretamente e exibir mensagens de erro ao usuário', () => {
      cy.get('[data-test="submit-button"]').click();
      cy.contains('É necessário informar um endereço de email').should('be.visible');
      cy.contains('Crie uma senha').should('be.visible');
      cy.contains('Repita a senha criada acima').should('be.visible');
    })
  })