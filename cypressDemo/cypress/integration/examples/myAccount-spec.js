/// <reference types="cypress" />
import myAccount from "../../support/pageObjects/myAccount"
const acctInfo = new myAccount()
beforeEach(() => {
    cy.visit(Cypress.env('authentication_url'))
    cy.loginWithEnvVariables();
});

describe('My Account page', function () {

    it('Navigate to Order History', function () {
        acctInfo.getOrderHistory()
            .click()

        cy.url()
            .should('contain', 'controller=history')

        cy.get('.page-heading')
            .should('contain', 'Order history')


    });
    it('Navigate to My Credit slips', function () {
        acctInfo.getMyCreditSlips()
            .click()

        cy.url()
            .should('contain', 'controller=order-slip')

        cy.get('.page-heading')
            .should('contain', 'Credit slips')


    });

})