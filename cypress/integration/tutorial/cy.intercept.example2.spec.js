// cypress/integration/tutorial/cy.intercept.example2.spec.js

import homePage from '../pages/homePage.js'
import loginPage from '../pages/loginPage.js'
import privateHomePage from '../pages/privateHomePage.js';

const homePageObject = new homePage();
const loginPageObject = new loginPage();
const privateHomePageObject = new privateHomePage(); 

context('Using cy.request to validate sucessful Login:', () => {
  beforeEach(() => {
    // Navigates to HomePage
    cy.visit('/');

    // Clicks and opens Login Page
    homePageObject.clickLoginButton();
  });

  
  it.only('Logs the user in and validates the successful login', () => {
    // User Authentication
    loginPageObject.writeInputUser('cypressDemo');
    loginPageObject.writePasswordInputUser('test');
    loginPageObject.clickSignInButton();

    // Validates the correct login of the account
    privateHomePageObject.isLoginSuccessful();
  })
});
