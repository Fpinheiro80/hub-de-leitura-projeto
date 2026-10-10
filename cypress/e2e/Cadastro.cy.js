///<reference types="cypress"/>
import  {  faker  }  from  '@faker-js/faker' ;

describe('Funcionalidade: Cadastro no hub de leitura', () => {
    
    beforeEach(() => {
        cy.visit("register.html")
    });

it('Deve fazer cadastro com sucesso, usando função JS', () => {
    let email = `Fabio8${Date.now()}@teste.com` 

    cy.get('#name').type('Fabio pinheiro')
    cy.get('#email').type (email)
    cy.get('#phone').type('83988324888')
    cy.get('#password').type('FP8000*')
    cy.get('#confirm-password').type('FP8000*')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should('include','dashboard')

});

it('Deve fazer cadastro com sucesso, usando faker', () => {
    let nome = faker.person.fullName()
    let email = faker.internet.email() 

    cy.get('#name').type(nome)
    cy.get('#email').type (email)
    cy.get('#phone').type('83988324888')
    cy.get('#password').type('FP8000*')
    cy.get('#confirm-password').type('FP8000*')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
    cy.url().should('include','dashboard')
    cy.get('#user-name').should('contain', nome)

});

});