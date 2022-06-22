// cypress/integration/pages/loginPage.js

var shortTimeout = 15000;

var pageLocators = {
  emailInputNewUser: '#email_create',
  signUpButton: '#SubmitCreate > span',
  emailInputOldUser: '#email',
  passwordInputOldUser: '#passwd',
  signInButton: '#SubmitLogin > span',
}
  
class loginPage {

  emailInputNewUserWebElement() { return cy.get(pageLocators.emailInputNewUser); }

  signUpButtonWebElement() { return cy.get(pageLocators.signUpButton); }

  emailInputOldUserWebElement() { return cy.get(pageLocators.emailInputOldUser); }

  passwordInputOldUserWebElement() { return cy.get(pageLocators.passwordInputOldUser); }

  signInButtonWebElement() { return cy.get(pageLocators.signInButton); }

  writeEmailInputNewUser() {
    var date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const email = 'email' + seconds + minutes + hours + day + month + year + '@gmail.com';
    this.emailInputNewUserWebElement().type(email);
    cy.wrap(email).as('userEmail');
  }

  clickSignUpButton() { return this.signUpButtonWebElement().click(); }

  writeEmailInputOldUser(email) { 
    this.emailInputOldUserWebElement().type(email);
  }

  writePasswordInputOldUser(password) { 
    this.passwordInputOldUserWebElement().type(password);
  }

  clickSignInButton() {     
    cy.intercept('POST', '/index.php?rand**')
    .as('loginResponse');

    this.signInButtonWebElement().click();
  }
  
} 
  
export default loginPage;