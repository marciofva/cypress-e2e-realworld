const signin_link_menu = 'a[href="/login"]'

class HomePage{

    start(){
        cy.visit('/')
        return this
    }

    goToSignInPage(){
        cy.get(signin_link_menu).click()
        return require('./signin.po');
    }

    getSignInElementMenu(){
        return cy.get(signin_link_menu)
    }
}
module.exports = new HomePage();