// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const login = (email, password) => {
    cy.session(email, () => {
        cy.visit('/login')
        cy.get("input[name='username']").type(email)
        cy.get("input[name='password']").type(`${password}`)
        cy.get("button[type='submit']").click();
        cy.contains('Login successful', {timeout:20000}).should('be.visible');
        cy.url({timeout:20000}).should('include', '/list');
    }, { 
        cacheAcrossSpecs: true
    })
};

Cypress.Commands.add('login', login)