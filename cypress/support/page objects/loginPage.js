export class LoginPage{

    signIn (email, password) {
        cy.contains('Sign in').click();
        cy.get('[formcontrolname="email"]').type(email);
        cy.get('[formcontrolname="password"]').type(password);
        cy.get('[type="submit"]').click();
        cy.wait(500)

}
}

export const login = new LoginPage();