/// <reference types="Cypress" />

import HomePage from '../../support/page_objects/home.po'
import SignInPage from '../../support/page_objects/signin.po'

const dbSingin = require('../../fixtures/signinDB')

describe('Sign into System', function() {

    this.beforeEach(() => {
        HomePage.start()
                .goToSignInPage()
        
        cy.url().should('include', '/login')
    })


    it('Should sign into system passing valid credentials', () => {
        SignInPage.signInForm(dbSingin.email, dbSingin.password)
                .getSettingsElementMenu()
                .should('contain.text', 'Settings') 
    })
})