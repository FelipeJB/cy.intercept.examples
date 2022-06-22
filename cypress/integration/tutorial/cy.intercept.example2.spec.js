// cypress/integration/tutorial/cy.intercept.example2.spec.js

import homePage from '../pages/homePage.js'
import loginPage from '../pages/loginPage.js'
import accountsCreationSurveyPage from '../pages/accountsCreationSurveyPage.js'
import privateHomePage from '../pages/privateHomePage.js'

const homePageObject = new homePage();
const loginPageObject = new loginPage();
const accountsCreationSurveyPageObject = new accountsCreationSurveyPage();
const privateHomePageObject = new privateHomePage();

context('Using cy.request to validate sucessful Login:', () => {
  beforeEach(() => {
    // Navigates to HomePage
    cy.visit('/');

    // Clicks and opens Login Page
    homePageObject.clickLoginButton();
  });

  it('Creates an account and validates the login', () => {
    // Inputs an email and opens sign up page
    loginPageObject.writeEmailInputNewUser();
    loginPageObject.clickSignUpButton();

    // Fills the sign up survey with the personal information
    accountsCreationSurveyPageObject.clickPersonalInfoRadioButtonMale();
    accountsCreationSurveyPageObject.writePersonalInfoFirstNameInput('Diego');
    accountsCreationSurveyPageObject.writePersonalInfoLastNameInput('Eusse');
    accountsCreationSurveyPageObject.writePersonalInfoPasswordInput('Testing1!');
    accountsCreationSurveyPageObject.writePersonalInfoBirthDayInput('1');
    accountsCreationSurveyPageObject.writePersonalInfoBirthMonthInput('April');
    accountsCreationSurveyPageObject.writePersonalInfoBirthYearInput('1997');

    // Fills the sign up survey with the address information
    accountsCreationSurveyPageObject.writeAddressInfoCompanyInput('Globant');
    accountsCreationSurveyPageObject.writeAddressInfoAddress1Input('Fake Street 4');
    accountsCreationSurveyPageObject.writeAddressInfoCityInput('Winterfell');
    accountsCreationSurveyPageObject.writeAddressInfoCountryInput('United States');
    accountsCreationSurveyPageObject.writeAddressInfoStateInput('Nevada');
    accountsCreationSurveyPageObject.writeAddressInfoZipInput('10005');
    accountsCreationSurveyPageObject.writeAddressInfoMobileInput('1234567');
    accountsCreationSurveyPageObject.writeAddressInfoAliasInput('Monster House');

    // Clicks on the register button and creates the account account
    accountsCreationSurveyPageObject.clickRegisterButton();

    // Validates the correct creation of the account
    privateHomePageObject.isLoginSuccessful();
  });
  
  it.only('Logs the user in and validates the successful login', () => {
    // Inputs an old email and its respective password and clicks in Sign In
    loginPageObject.writeEmailInputOldUser('globant@globant.com');
    loginPageObject.writePasswordInputOldUser('12345');
    loginPageObject.clickSignInButton();

    // Validates the correct login of the account
    privateHomePageObject.isLoginSuccessful();
  })
});
