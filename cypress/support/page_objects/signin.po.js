const email_lbl = 'input[type="email"]'
const password_lbl = 'input[type="password"]'
const signin_btn = 'button[type="submit"]'

class SignInPage{

    inputEmail(email){
        return cy.get(email_lbl).type(email)
    }

    inputPassword(password){
        return cy.get(password_lbl).type(password)
    }

    clickOnSignIn(){
        return cy.get(signin_btn).click()
    }

    signInForm(email, password){
        this.inputEmail(email)
        this.inputPassword(password)
        this.clickOnSignIn()
        return require('./myAccount.po');
    }
}
module.exports = new SignInPage();