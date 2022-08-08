// <reference types="Cypress" />

import { page, buttons } from "../../support/helper/enums";
import { login } from "../../fixtures/locators/locators";

describe("Test Login Functionality", () => {

    context('Check successful login scenarios', function () {    

        it("Login should be successful", () => {
            cy.login('dev@wonderkind.com','Wonderkids!42!')
            cy.url().should('eq', Cypress.config().baseUrl+page.OVERVIEW)
        });
    });

    context.skip('Check unsuccessful login scenarios', function () {    

        it("should give error when password not entered", () => {
            cy.setLoginUsername("afa").clickButton(buttons.LOGIN);
            cy.get(login.passwordError).should("have.text","Please fill in this field");
        });

        it("should give error when username not entered", () => {
            cy.setLoginPassword("afa").clickButton(buttons.LOGIN);
            cy.get(login.emailError).should("have.text","Please fill in this field");
        });
    })

});
