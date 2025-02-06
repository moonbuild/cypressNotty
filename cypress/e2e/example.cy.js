
describe('Example Domain Test', () => {
    it('should visit example.com and check for "Example Domain" in h1 tag', () => {
      // visit the example.com page
      cy.visit('https://example.com');
  
      cy.get('h1') //check if there is a h1 tag
      .should('contain', 'Example Domain'); //assert if it contains text 'Example Domain'
    });
  });