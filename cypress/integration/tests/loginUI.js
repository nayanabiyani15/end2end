// <reference types="Cypress" />

import { page, buttons } from "../../support/helper/enums";
import { login } from "../../fixtures/locators/locators";

describe("Test Login Functionality", () => {

    context('Check successful login scenarios', function () {    

        it("User should login successfully with given user details", () => {
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
            cy.setLoginPassword("afa",).clickButton(buttons.LOGIN);
            cy.get(login.emailError).should("have.text","Please fill in this field");
        });
    })
});

describe("Test logout Functionality", () => {
    context('User should logout properly', function () {    

        it("User should logout", () => {
            cy.logout();
        });

    })
});
