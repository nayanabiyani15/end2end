/// <reference types="cypress" />

import cypress from "cypress";
import { login } from "../../fixtures/locators/locators";
import { page } from "./enums";


Cypress.Commands.add("login", (email, password) => {

    cy.visit(page.LOGIN)
        .get(login.username).clear().type(email)
        .get(login.password).clear().type(password)
        .get(login.continueButton).click();
    cy.url().should('eq', Cypress.config().baseUrl+page.OVERVIEW)
});

Cypress.Commands.add("setLoginUsername", (email) => {
    cy.get(login.username).clear().type(email).should('have.value', email);
});

Cypress.Commands.add("setLoginPassword", (password) => {
    cy.get(login.password).clear().type(password).should('have.value', password);
});