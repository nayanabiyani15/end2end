/// <reference types="cypress" />

import { campaign, GSadData} from "../../fixtures/locators/locators";

Cypress.Commands.add("createCampaign", () => {
    cy.get(campaign.create)
});

Cypress.Commands.add("setWorkspace", () => {
    cy.get(campaign.selectWorkspace).click().get(campaign.searchWorkspace).type("Nayana Test")
});

Cypress.Commands.add("filterDraftCampaigns", () => {
    cy.get(campaign.filterDraft).click().get(campaign.listcampaign).should('be.visible')
});

Cypress.Commands.add("selectCampaign", () => {
    cy.get(campaign.listcampaign).click().url().should('include','campaigns-overview')
});

Cypress.Commands.add("createAds", () => {
    cy.contains(" Start creating ads ").click().get(campaign.googleSearchSection).should('be.visible')
});

Cypress.Commands.add("createGSAds", (header1, header2,header3,description1, description2) => {
    cy.contains(campaign.createGSAds).click()
    cy.url().should('include','/ads/google-search-ad/create')
    .setGSAdData(header1, header2,header3,description1, description2)
});

Cypress.Commands.add("setGSAdData", (header1, header2,header3,description1, description2) => {
    cy.get(GSadData.header1).type(header1)
    .get(GSadData.header2).type(header2)
    .get(GSadData.header3).type(header3)
    .get(GSadData.description1).type(description1)
});
