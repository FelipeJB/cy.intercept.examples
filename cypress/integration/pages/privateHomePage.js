// cypress/integration/pages/privateHomePage.js

var shortTimeout = 15000;
var pageLocators = {};
  
class privateHomePage {

  isLoginSuccessful() {
    
    cy.wait('@loginResponse', { timeout: shortTimeout })
      .its('response.statusCode')
      .should('eq', 200);

    cy.get('@loginResponse')
      .then(loginResponse => {
        console.log(loginResponse);
    })

  }
  
} 
    
export default privateHomePage;