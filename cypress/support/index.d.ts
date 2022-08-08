/// <reference types="Cypress" />

declare namespace Cypress {
    interface Chainable<Subject> {
      
      /*** Login related commands starts */
      /**
       * It should login with the given email and password on login page
       * @param email
       * @param password
       * @example cy.login(email, password)
       */
      login(email: string, password: string): Chainable<any>

      /**
      * Pre-requisite - User should have the login link
      * User will be able to set the login username such that it is used further with this username for login
      * @example cy.setLoginUsername('email')
      */
      setLoginUsername(email: String): Chainable<any>

      /**
      * Pre-requisite - User should know the username already to login
      * User will be able to set the login password such that it is used further with this password for login
      * @example cy.setLoginPassword('password')
      */
      setLoginPassword(password: String): Chainable<any>

      /**
      * Pre-requisite - User should know the button to be clicked
      * User will be able to click the required button 
      * @example cy.clickButton(buttons.LOGIN);
      */
      clickButton(button: string): Chainable<any>


      /*** Login related commands ends */
    }
}