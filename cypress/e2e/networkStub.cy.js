describe('Stub Notes API on /list', () => {
    it('should stub the notes/all API ', () => {
      cy.intercept('GET', 'http://192.168.0.147:8000/note/all', {
        statusCode: 200,
        body: [
          {
            note_id: 1,
            title: 'Sample Note',
            body: 'This is a test note',
            modified_at: '2025-02-07T06:30:16.803Z',
            created_at: '2025-02-07T06:30:16.803Z',
            user_id: 123,
            additionalProp1: {}
          },
          {
            note_id: 2,
            title: 'Another Note',
            body: 'This is another test note',
            modified_at: '2025-02-07T07:00:00.000Z',
            created_at: '2025-02-07T07:00:00.000Z',
            user_id: 124,
            additionalProp1: {}
          }
        ]
      }).as('getNotes');
  
      cy.login('mourya', 'password');
  
      cy.visit('/list');
  
      cy.wait('@getNotes', { timeout: 30000 }).then((interception) => {
        expect(interception.response.statusCode).to.eq(200);
      });
  
      cy.contains('Sample Note', { timeout: 30000 }).should('be.visible');
      cy.contains('Another Note', { timeout: 30000 }).should('be.visible');
    });
  });
  