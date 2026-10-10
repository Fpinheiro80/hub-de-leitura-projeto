///<reference types="cypress"/>


describe('Funcionalidade: Login', () => {

  beforeEach(() => {
    cy.visit('Login.html')
  });

  it('Deve fazer login com sucesso', () => {
    cy.get('#email').type('usuario@teste.com')
    cy.get('#password').type('user123')
    cy.get('#login-btn').click()
    cy.url().should('include', 'dashboard')

  })
  
  it('Deve validar mensagem de erro com email ou senha incorretos', () => {
    let email = `Fabio8${Date.now()}@teste.com` 
    let senha = `fabio8${Date.now()}`

    cy.get('#email').type(email)
    cy.get('#password').type(senha)
    cy.get('#login-btn').click()
    cy.get('#alert-container').should( 'contain' ,'Email ou senha incorretos.')


  });

  

})