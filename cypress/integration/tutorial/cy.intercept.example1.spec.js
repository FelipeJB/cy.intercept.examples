// cypress/integration/tutorial/cy.intercept.example1.spec.js

var shortTimeout = 15000;

context('Using cy.request to validate sucessful Login:', () => {

  beforeEach(() => {
    // Navigates to HomePage
    cy.visit('');

    // Clicks and opens Login Page
    cy.get('.login').click();
  });

  it.only('Logs the user in and validates the successful login', () => {

    // Inputs an old email and its respective password and clicks in Sign In
    cy.get('#email').type('globant@globant.com');
    cy.get('#passwd').type('12345');

    // Before we click the login confirmation button, we create the intercept
    cy.intercept('POST', '/index.php?rand**')
      .as('loginResponse')
      .then(() => {
        cy.get('#SubmitLogin > span').click();
      })

    // Finally, we validate the correct login of the account
    cy.wait('@loginResponse', { timeout: shortTimeout })
      .its('response.statusCode')
      .should('eq', 200);
    
    //We can also print the full response to see its content
    cy.get('@loginResponse').then((response) => {
      console.log(response);
    })

    //We can also make some other kinds of validations
    // ** Let's first convert the body response to a JSON object so we can inspect it deeper.
    cy.get('@loginResponse')
      .its('response.body')
      .then((responseBody) => {
        responseBody = JSON.parse(responseBody);
        console.log(responseBody);
        cy.wrap(responseBody).as('responseBodyJSON')
      })
    
    // Now let's validate that the user does not have any previous pending purchase
    cy.get('@responseBodyJSON')
      .its('products')
      .should('have.length', 0);
    
    // Let's also validate that the account was successfully logged without any errors
    cy.get('@responseBodyJSON')
      .its('hasError')
      .then((hasErrorValue) => {
        expect(hasErrorValue).to.be.a('boolean');
        expect(hasErrorValue).to.be.deep.equal(false);
      })
    
    // Finally, let's validate that the total cost for the account is $0.00
    cy.get('@responseBodyJSON')
      .its('total')
      //Let's convert it to a number:
      .then((accountTotal) => {
        accountTotal = accountTotal.replace('$', '');
        accountTotal = parseFloat(accountTotal);
        expect(accountTotal).to.be.equal(0.00);
      })
  })
});