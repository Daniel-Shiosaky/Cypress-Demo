// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add("logingWithFixtures", function () {

    return cy.fixture('users').then(function (data) {
        this.data = data

        const email = this.data.user1.email
        const pwd = this.data.user1.password
        cy.get('#email')
            .type(email)

        cy.get('#passwd')
            .type(pwd)

        cy.get('#SubmitLogin')
            .click()

    })

})
Cypress.Commands.add("loginWithEnvVariables", function () {

    return cy.fixture('users').then(function (data) {
        this.data = data

        const email = this.data.user1.email
        const pwd = this.data.user1.password
        cy.get('#email')
            .type(email)

        cy.get('#passwd')
            .type(pwd)

        cy.get('#SubmitLogin')
            .click()

    })

})
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
