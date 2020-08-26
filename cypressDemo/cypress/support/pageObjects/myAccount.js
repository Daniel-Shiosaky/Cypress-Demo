class myAccount {
    getOrderHistory() {
        return cy.get('.icon-list-ol')
    }
    getMyCreditSlips() {
        return cy.get('.icon-ban-circle')
    }
    getMyAddresses() {
        return cy.get('.icon-building')
    }
    getMyPersonalInfo() {
        return cy.get('.icon-user')
    }
    getMyPersonalInfo() {
        return cy.get('.icon-heart')
    }
    getpageHeading() {
        return cy.get('.page-heading')
    }
    getLogoutButton() {
        return cy.get('.logout')
    }
    getShoppingCart() {
        return cy.get('[title="View my shopping cart"]')
    }
}

export default myAccount;