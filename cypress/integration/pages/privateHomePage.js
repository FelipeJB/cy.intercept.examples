// cypress/integration/pages/privateHomePage.js

var shortTimeout = 15000;
var pageLocators = {};
  
class privateHomePage {

  isLoginSuccessful() {

    // http status code validation
    cy.wait('@loginResponse', { timeout: shortTimeout })
      .its('response.statusCode')
      .should('eq', 200);

    cy.get('@loginResponse')
      .then(loginResponse => {
        console.log(loginResponse);
    })


//We can also get the full response to see its content
  cy.get('@loginResponse').then((response) => {
    console.log(response);
  })
 
//We can also make some other validations
cy.get('@loginResponse')
  .its('response.body')
  .then((responseBody) => {
    cy.wrap(responseBody).as('responseBodyJSON')
  })

// Now let's validate that all items contain valid keys
 cy.get('@responseBodyJSON')
 .its('Items')
 .each(value =>
   expect(value).to.have.all.keys('cat', 'desc','id','img','price','title')
 )

  }
} 
    
export default privateHomePage;