class authentication {
    getEmailCreate() {
        return cy.get('#email_create')
    }
    getCreateSubmitButton() {
        return cy.get('#SubmitCreate > span')
    }
    getCreateAccountHeading() {
        return cy.get('.icon-building')
    }
    getMyPersonalInfo() {
        return cy.get('#create-account_form > .page-subheading')
    }
    getloginformHeading() {
        return cy.get('#login_form > .page-subheading')
    }
    getloginInEmailField() {
        return cy.get('#email')
    }
    getpasswordfield() {
        return cy.get('#passwd')
    }
    getCreateacctEmailField() {
        return cy.get('#email_create')
    }
    getBreadCrumbs() {
        return cy.get('.breadcrumb')
    }
    getSigninButon() {
        return cy.get('#SubmitLogin > span')
    }
}

export default authentication;