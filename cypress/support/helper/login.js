/// <reference types="cypress" />

import { login } from "../../fixtures/locators/locators";
import { page } from "./enums";


Cypress.Commands.add("login", (email, password) => {

    cy.visit(page.LOGIN)
        .get(login.username).clear().type(email)
        .get(login.password).clear().type(password);
    cy.contains('Continue').click();
    cy.url().should('eq', Cypress.config().baseUrl+page.OVERVIEW)
});

Cypress.Commands.add("setLoginUsername", (email) => {
    cy.get(login.username).clear().type(email).should('have.value', email);
});

Cypress.Commands.add("setLoginPassword", (login, password) => {
    cy.get(login.password).clear().type(password).should('have.value', password);
});

Cypress.Commands.add("logout", () => {
    cy.get(login.userprofile).click().get(login.logout).should('be.visible').click()
    cy.url().should('contains', 'https://wonderkind-test.eu.auth0.com/');
});