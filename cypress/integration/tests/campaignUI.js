/// <reference types="Cypress" />


describe("As a User I want to be able to perform different operations on campaign", () => {
    before(() => {
        cy.login('dev@wonderkind.com','Wonderkids!42!');
        cy.login
    });

    after(()=> {
        cy.logout();
    })

    context('Select Draft campaign ', function () {    

        it("As a User I want to be create Google search ad on draft campaigns", () => {
            cy.filterDraftCampaigns()
            .selectCampaign()
            .createAds()
            .createGSAds('header1','header2','header3','description1','description2');
        });
    });
});