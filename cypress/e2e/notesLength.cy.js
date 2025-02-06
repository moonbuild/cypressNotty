describe("Number of Notes test", ()=>{
    it("should have only 2 notes", ()=>{
        cy.login('mourya', 'password');
        cy.visit('/list');
        cy.get('div.rounded-xl.border.bg-card.text-card-foreground.shadow-md', {timeout:30000}).should('have.length', 3);
    });
});