import{login, LoginPage} from "../../support/page objects/loginPage";

describe('login', async () => {

    beforeEach('open application', () => {
        cy.openHomePage();
    })

    it('log in to the application with correct email and password', async () => {
        login.signIn("test2@test.com", "TestUserName");

        cy.get('[routerlinkactive="active"]').last()
        .should('be.visible').
        invoke('text').then(text => {
            const userName = text.trim();
            expect(userName).to.equal('testusername')
        })
    })

    it('log in to the application with incorrect email and correct password', async () => {
        login.signIn("test@test.com", "TestUserName");

        cy.get('.error-messages').find('li').invoke('text').then(text => {
            const errorMessage = text.trim();
            expect(errorMessage).to.equal('email or password is invalid');
        })
    })

    it('log in to the application with correct email and incorrect password', async () => {
        login.signIn("test2@test.com", "123456");

        cy.get('.error-messages').find('li').invoke('text').then(text => {
            const errorMessage = text.trim();
            expect(errorMessage).to.equal('email or password is invalid');
        })
    })
})