/// <reference types="Cypress" />

import HomePage from '../../support/page_objects/home.po'
import MyAccountPage from '../../support/page_objects/myAccount.po'

const dbSingin = require('../../fixtures/signinDB')

describe('Logout from System', function() {

    this.beforeEach(() => {
        HomePage.start()
                .goToSignInPage()
                .signInForm(dbSingin.email, dbSingin.password)
    })


    it('Should logout', () => {
        MyAccountPage.goToSettings()
                    .logout()
                    .getSignInElementMenu()
                    .should('have.text', 'Sign in') 
    })
})