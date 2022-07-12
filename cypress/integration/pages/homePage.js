// cypress/integration/pages/HomePage.js

var pageLocators = {
    loginButton: '#login2',
  }

  class homePage {
  
    loginButtonWebElement() { return cy.get(pageLocators.loginButton); }
    clickLoginButton() { return this.loginButtonWebElement().click(); }
    
  } 
  
  export default homePage;