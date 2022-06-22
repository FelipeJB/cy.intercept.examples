// cypress/integration/pages/HomePage.js

var pageLocators = {
  loginButton: '.login',
  contactButton: '#contact-link > a'
}

class homePage {

  loginButtonWebElement() { return cy.get(pageLocators.loginButton); }

  contactButtonWebElement() { return cy.get(pageLocators.contactButton); }

  clickLoginButton() { return this.loginButtonWebElement().click(); }
  
} 

export default homePage;