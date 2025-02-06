
describe('LocalStorage Tests', () => {
    it('should check if localStorage is empty', () => {
        cy.login('mourya', 'password');
        cy.visit('/list')
        cy.contains('button', 'Logout').click();
        cy.url().should('include', '/login')
        cy.window().then((win) => {
            const isLocalStorageEmpty = Object.keys(win.localStorage).length === 0;
            expect(isLocalStorageEmpty).to.be.true;
        });
    });
});
  