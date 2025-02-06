describe("Visit Page", ()=>{
    it("should visit page", ()=>{
        cy.login('mourya', 'password');
        cy.visit('/list');
    });
});