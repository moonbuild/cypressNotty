describe("New User Registration", () =>{
    it("should register new user", ()=>{
        const username = "mourya";
        const password = "password";
        cy.visit('register');
        cy.get("input[name='full_name']").type("Mourya Pranay");
        cy.get("input[name='username']").type(username);
        cy.get("input[name='password']").type(password);
        cy.contains('button', 'Create account').click();
        cy.contains('Registration successful!', {timeout:20000}).should('be.visible');
        cy.url().should('include', '/login');
        cy.log("Registration succesfull");

        cy.visit('/login');
        cy.get("input[name='username']").type(username);
        cy.get("input[name='password']").type(password);
        cy.get("button[type='submit']").click();
        cy.contains('Login successful', {timeout:20000}).should('be.visible');
        cy.url().should('include', '/list');
        cy.log("Login successfull")
    })
});