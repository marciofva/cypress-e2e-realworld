/// <reference types="Cypress" />

import HomePage from '../../support/page_objects/home.po'
import MyAccountPage from '../../support/page_objects/myAccount.po'
import ManageArticlePage from '../../support/page_objects/manageArticle.po'

const dbSingin = require('../../fixtures/signinDB')
const dbArticle = require('../../fixtures/articleDB')


describe('Manage Article - CRUD', function() {

    //Log into system and create a new article
    this.beforeEach(() => {
        HomePage.start()
                .goToSignInPage()
                .signInForm(dbSingin.email, dbSingin.password)
                .addNewPost()
                .fillArticleForm(dbArticle.add.title, dbArticle.add.about, dbArticle.add.text, dbArticle.add.tag)
                .getArticleTitle().should('have.text', dbArticle.add.title)
    })


    it('Should REMOVE an article', () => {

        ManageArticlePage.deleteArticle()
                        .goToGlobalFeedArea()

        //Check if the article has been removed in the list
        cy.get('a.preview-link > h1').each((element, index)=>{
            if(index === 0){
                expect(element.text()).to.not.equal(dbArticle.add.title)
            }
        })
    })


    it('Should ADD a new article', () => {

        MyAccountPage.goToHomeAccountPage()
                    .goToGlobalFeedArea()

        //Check if the article has been added in the first item of the list
         cy.get('a.preview-link > h1').each((element, index)=>{
            if(index === 0){
                expect(element.text()).to.eq(dbArticle.add.title);
            }
        })
    })


    it('Should EDIT an article', () => {

        ManageArticlePage.editArticle()
                        .fillArticleForm(dbArticle.edit.title, dbArticle.edit.about, dbArticle.edit.text, dbArticle.edit.tag)

        cy.wait(2000)

        MyAccountPage.goToHomeAccountPage()
                    .goToGlobalFeedArea()

        //Check if the article has been updated
        cy.get('a.preview-link > h1').each((element, index)=>{
            if(index === 0){
                expect(element.text()).to.eq(dbArticle.edit.title);
            }
        })
    })


    it('Should READ an article', () => {

        MyAccountPage.goToHomeAccountPage()
                    .goToGlobalFeedArea()

        //Check if "title" is displaying properly in the first item of the list
        cy.get('a.preview-link > h1').each((element, index)=>{
            if(index === 0){
                expect(element.text()).to.eq(dbArticle.add.title);
            }
        })

        //Check if "about article" description is displaying properly in the first item of the list
        cy.get('a.preview-link > p').each((element, index)=>{
            if(index === 0){
                expect(element.text()).to.eq(dbArticle.add.about);
                element.click()
            }
        })

        //Check if "title" is displaying properly in the details page
        ManageArticlePage.getArticleTextDescription()
                        .should('have.text', dbArticle.add.text)

        //Check if "article text" is displaying properly in the details page
        ManageArticlePage.getArticleTitle()
                        .should('have.text', dbArticle.add.title)
    })
})