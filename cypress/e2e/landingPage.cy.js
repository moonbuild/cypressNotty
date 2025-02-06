describe('Landing Page Renders', ()=>{
    it('heading exists', ()=>{
        cy.visit('/');
        cy.get('h2')
        .contains('Capture Your Thoughts with')
        .find('span.text-blue-600')
        .contains('Notty');

    });
    
    it('redirects to /list if session exists', ()=>{
        cy.login('mourya', 'password');
        cy.visit('/');
        cy.contains('button', 'Get Started')
        .should('exist')
        .click();
        cy.url().should('include', '/list')
    });

    it('redirects to /register if session does not exists', ()=>{
        cy.visit('/');
        cy.contains('button', 'Get Started')
        .should('exist')
        .click();
        cy.url().should('include', '/register')
    })
})