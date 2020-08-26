/// <reference types="cypress" />
import authentication from '../../support/pageObjects/authentication'
const Authpage = new authentication()
beforeEach(() => {
  cy.visit(Cypress.env('authentication_url'))


});

describe('Login Test', function () {

  it('assert user landed on login page', function () {

    Authpage.getBreadCrumbs()
      .should('be.visible')
    Authpage.getMyPersonalInfo()
      .should('be.visible')
      .and('contain', 'Create an account')
    Authpage.getloginformHeading()
      .should('be.visible')
      .and('contain', 'Already registered?')

  });

  it('loging with fixtures', function () {
    cy.logingWithFixtures();
  });

  it('log in with env variables', function () {
    cy.loginWithEnvVariables();
  })

})


