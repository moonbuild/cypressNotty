describe('Login test', () => {
  it('should successfully log in', () => {
    cy.visit('/login');
    cy.get("input[name='username']").type('mourya');
    cy.get("input[name='password']").type('password');
    cy.get("button[type='submit']").click();
    cy.contains('Login successful', {timeout:20000}).should('be.visible');
    cy.url().should('include', '/list');
  });

  it('should fail log in', () => {
    cy.visit('/login');
    cy.get("input[name='username']").type('mourya');
    cy.get("input[name='password']").type('park');
    cy.get("button[type='submit']").click();
    cy.contains('Invalid username or password', {timeout:20000}).should('be.visible');
  });
});