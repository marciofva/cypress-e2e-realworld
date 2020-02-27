const add_post_link_menu = 'a[href="/editor"]'
const settings_link_menu = 'a[href="/settings"]'
const home_link_menu = 'Home'
const global_feed_area = 'Global Feed'
const logout_btn = 'Or click here to logout.'

class MyAccountPage{

    addNewPost(){
        cy.get(add_post_link_menu).click()
        return require('./manageArticle.po')
    }

    goToSettings(){
        cy.get(settings_link_menu).click()
        return this
    }

    goToHomeAccountPage(){
        cy.contains(home_link_menu).click()
        return this
    }

    goToGlobalFeedArea(){
        cy.contains(global_feed_area).click()
        return this
    }

    logout(){
        cy.contains(logout_btn).click()
        return require('./home.po');
    }

    getSettingsElementMenu(){
        return cy.get(settings_link_menu)
    }
}
module.exports = new MyAccountPage();