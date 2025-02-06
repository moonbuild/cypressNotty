describe('Create Note', () => {
    it('should create a new note', () => {
      cy.login('mourya', 'password');
      cy.visit('/list');
  
      cy.get('div.rounded-xl.border.bg-card.text-card-foreground.shadow-md', {timeout:40000})
      .then((notesBefore) => {
        const countBefore = notesBefore.length;
        const title = "Fried Rice";
        const info = "I loved the taste in the new shop";
        cy.log(`Initial number of notes: ${countBefore}`);
        cy.contains('button', 'Create New Note', { timeout: 30000 })
        .should('exist')
        .click();
        cy.get('input[placeholder="Title"]', { timeout: 30000 }).type(title);
        cy.get('div.ql-editor p').clear().type(info);
        cy.contains('button', 'Create Note').click();
        
  
        cy.get('div.rounded-xl.border.bg-card.text-card-foreground.shadow-md').should((notesAfter) => {
          expect(notesAfter.length).to.eq(countBefore + 1);
        });
      });
    });
    
  });