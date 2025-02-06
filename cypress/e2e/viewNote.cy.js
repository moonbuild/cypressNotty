describe('View Note', ()=>{
    it("Title should be disabled", ()=>{
        
        cy.login('mourya', 'password');
        cy.visit('/list');

        cy.get('button.border.border-input', {timeout:30000})
        .filter(':has(svg.tabler-icon-eye)')
        .last()
        .click();
        
        cy.get("input[placeholder='Title']")
        .should('be.disabled');
        
        cy.contains('button', 'Close')
        .should('exist')
        .click();
    })
});