describe('Delete Note', ()=>{
    it("Title should be disabled", ()=>{
        
        cy.login('mourya', 'password');
        cy.visit('/list');

        let initialCount;

        cy.get('.rounded-xl.border.bg-card.text-card-foreground.shadow-md', {timeout:30000})
            .its('length')
            .then((count) => {
                initialCount = count;
                cy.log(`Initial number of elements: ${initialCount}`);
        });
        initialCount = initialCount-1

        cy.get('button.border.border-input', {timeout:30000})
        .filter(':has(svg.tabler-icon-trash-x)')
        .last()
        .click();
        cy.log('It Clicked Delete Icon')

        cy.log('Something should  happen')
        
        
        cy.contains('button', 'Delete')
        .should('exist')
        .click();

        cy.log('It Clicked Delete Button')
        cy.get('.rounded-xl.border.bg-card.text-card-foreground.shadow-md', { timeout: 30000 })
            .its('length')
            .then((newCount) => {
                cy.log(`New number of elements: ${newCount}`);
                expect(newCount).to.eq(initialCount);
        });

        cy.log("It successfully deleted");
    });
});