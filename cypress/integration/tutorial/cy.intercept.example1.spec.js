var shortTimeout = 15000;

context('Using cy.request to validate sucessful Login:', () => {

  beforeEach(() => {
    // Navigate to HomePage
    cy.visit('');
    // Click and open Login Page
    cy.get('#login2').click();
  });

  it.only('Logs the user in and validates the successful login', () => {

    // Page Authentication
    cy.wait(2000);
    cy.get('#loginusername').type('cypressDemo');
    cy.get('#loginpassword').type('test');

    // Before we click the login confirmation button, we create the intercept
    cy.intercept('GET', '/entries')
      .as('loginResponse')
      .then(() => {
        cy.get('#logInModal .btn-primary').click();
      })
   
    // http status code validation
    cy.wait('@loginResponse', { timeout: shortTimeout })
      .its('response.statusCode')
      .should('eq', 200);

    //We can also print the full response to see its content
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
  })

});