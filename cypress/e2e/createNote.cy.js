describe("Create Note", () => {
    it("should create note", () => {
        cy.login('mourya', 'password');
        cy.visit('/list');

        let initialCount;
        cy.get('div.rounded-xl.border.bg-card.text-card-foreground.shadow-md', {timeout:30000})
            .its('length')
            .then((count) => {
                initialCount = count;
                cy.log(`Initial number of elements: ${initialCount}`);
        });
        initialCount = initialCount+1

        cy.contains('button', 'Create New Note', { timeout: 30000 })
        .should('exist')
        .click();

        const title = "Fried Rice";
        const info = "I loved the taste in the new shop";
        cy.get('input[placeholder="Title"]', { timeout: 30000 }).type(title);
        cy.get('div.ql-editor p').clear().type(info);
        cy.contains('button', 'Create Note').click();

        cy.get('div.rounded-xl.border.bg-card.text-card-foreground.shadow-md', { timeout: 30000 })
            .its('length')
            .then((newCount) => {
                cy.log(`New number of elements: ${newCount}`);
                expect(newCount).to.eq(initialCount);
            });
    });
    it('should display error for missing title', () => {
        cy.login('mourya', 'password');
        cy.visit('/list'); 
        
        cy.contains('button', 'Create New Note', { timeout: 30000 })
        .should('exist')
        .click();

        cy.get('input[placeholder="Title"]')
        .clear();
        cy.get('form').submit(); 
    
        cy.get('input[placeholder="Title"]:invalid').should('have.length', 1);
    });
});
