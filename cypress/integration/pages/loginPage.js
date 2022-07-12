// cypress/integration/pages/loginPage.js

var shortTimeout = 15000;

var pageLocators = {
  InputNewUser: '#loginusername',
  passwordInputUser: '#loginpassword',
  signInButton: '#logInModal .btn-primary',
}
  
class loginPage {

  InputNewUserWebElement() { return cy.get(pageLocators.InputNewUser); }

  passwordInputUserWebElement() { return cy.get(pageLocators.passwordInputUser); }

  signUpButtonWebElement() { return cy.get(pageLocators.signInButton); }


  writeInputUser(user) { 
    cy.wait(2000);
    this.InputNewUserWebElement().type(user);
  }

  writePasswordInputUser(password) { 
    this.passwordInputUserWebElement().type(password);
  }

  clickSignInButton()
  {
    cy.intercept('GET', '/entries')
    .as('loginResponse')
    .then(() => {
        this.signUpButtonWebElement().click();
    })
  }
  
} 
  
export default loginPage;