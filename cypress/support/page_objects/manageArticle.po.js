const title_input = 'input[placeholder="Article Title"]'
const about_input = 'input[placeholder*="article about?"]'
const text_input = 'textarea.form-control'
const tag_input = 'input[placeholder*="Enter tags"]'
const submit_btn = 'button'
const header_title_new_post_lbl = 'h1'
const text_article_lbl = 'p'
const edit_btn = 'i.ion-edit'
const delete_btn = 'i.ion-trash-a'

class ManageArticlePage{

    fillArticleForm(title, about, text, tag){
        cy.get(title_input).type('{selectall}{backspace}')
        cy.get(title_input).click().focused().clear().type(title);
        cy.get(about_input).clear().type(about)
        cy.get(text_input).clear().type(text)
        cy.get(tag_input).clear().type(tag)
        cy.get(submit_btn).click()
        return this
    }

    getArticleTitle(){
        return cy.get(header_title_new_post_lbl)
    }

    getArticleTextDescription(){
        return cy.get(text_article_lbl)
    }

    deleteArticle(){
        cy.get(delete_btn).click()
        return require('./myAccount.po');
    }

    editArticle(){
        cy.get(edit_btn).click()
        return this
    }
}
module.exports = new ManageArticlePage();