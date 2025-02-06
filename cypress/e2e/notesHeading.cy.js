describe("Heading Exists", ()=>{
    it("note heading should exist", ()=>{
        cy.login('mourya', 'password');
        cy.visit('/list');
        cy.get('h1.text-2xl', {timeout:30000})
        .contains('My Notes');
    });
});