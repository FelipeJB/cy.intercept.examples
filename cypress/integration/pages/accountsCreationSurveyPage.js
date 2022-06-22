// cypress/integration/pages/accountsCreationSurveyPage.js

var pageLocators = {
  personalInfo: {
    radioButtonMale: '#id_gender1',
    radioButtonFemale: '#id_gender2',
    firstNameInput: '#customer_firstname',
    lastNameInput: '#customer_lastname',
    emailInput: '#email',
    passwordInput: '#passwd',
    birthdayInput: {
      day: '#days',
      month: '#months',
      year: '#years'
    },
  },
  address: {
    firstNameInput: '#firstname',
    lastNameInput: '#lastname',
    companyInput: '#company',
    address1Input: '#address1',
    address2Input: '#address2',
    cityInput: '#city',
    stateInput: '#id_state',
    zip_codeInput: '#postcode',
    countryInput: '#id_country',
    additionalInfoInput: '#other',
    phoneInput: '#phone',
    mobileInput: '#phone_mobile',
    aliasInput: '#alias',
  },
  registerButton: '#submitAccount',
}
  
class accountsCreationSurveyPage {

  personalInfoRadioButtonMale() { return cy.get(pageLocators.personalInfo.radioButtonMale); }
  personalInfoRadioButtonFemale() { return cy.get(pageLocators.personalInfo.radioButtonFemale); }
  personalInfoFirstNameInput() { return cy.get(pageLocators.personalInfo.firstNameInput); }
  personalInfoLastNameInput() { return cy.get(pageLocators.personalInfo.lastNameInput); }
  personalInfoEmailInput() { return cy.get(pageLocators.personalInfo.emailInput); }
  personalInfoPasswordInput() { return cy.get(pageLocators.personalInfo.passwordInput); }
  personalInfoBirthDayInput() { return cy.get(pageLocators.personalInfo.birthdayInput.day); }
  personalInfoBirthMonthInput() { return cy.get(pageLocators.personalInfo.birthdayInput.month); }
  personalInfoBirthYearInput() { return cy.get(pageLocators.personalInfo.birthdayInput.year); }

  addressInfoFirstNameInput() { return cy.get(pageLocators.address.firstNameInput); }
  addressInfoLastNameInput() { return cy.get(pageLocators.address.lastNameInput); }
  addressInfoCompanyInput() { return cy.get(pageLocators.address.companyInput); }
  addressInfoAddress1Input() { return cy.get(pageLocators.address.address1Input); }
  addressInfoAddress2Input() { return cy.get(pageLocators.address.address2Input); }
  addressInfoCityInput() { return cy.get(pageLocators.address.cityInput); }
  addressInfoStateInput() { return cy.get(pageLocators.address.stateInput); }
  addressInfoZipInput() { return cy.get(pageLocators.address.zip_codeInput); }
  addressInfoCountryInput() { return cy.get(pageLocators.address.countryInput); }
  addressInfoAdditionalInfoInput() { return cy.get(pageLocators.address.additionalInfoInput); }
  addressInfoPhoneInput() { return cy.get(pageLocators.address.phoneInput); }
  addressInfoMobileInput() { return cy.get(pageLocators.address.mobileInput); }
  addressInfoAliasInput() { return cy.get(pageLocators.address.aliasInput); }

  registerButtonWebElement() { return cy.get(pageLocators.registerButton); }

  clickPersonalInfoRadioButtonMale() { return this.personalInfoRadioButtonMale().click(); }
  clickPersonalInfoRadioButtonFemale() { return this.personalInfoRadioButtonFemale().click(); }

  writePersonalInfoFirstNameInput(name) { return this.personalInfoFirstNameInput().type(name); }
  writePersonalInfoLastNameInput(lastName) { return this.personalInfoLastNameInput().type(lastName); }
  writePersonalInfoPasswordInput(password) { return this.personalInfoPasswordInput().type(password); }
  writePersonalInfoBirthDayInput(day) { return this.personalInfoBirthDayInput().select(day); }
  writePersonalInfoBirthMonthInput(month) { return this.personalInfoBirthMonthInput().select(month); }
  writePersonalInfoBirthYearInput(year) { return this.personalInfoBirthYearInput().select(year); }

  writeAddressInfoCompanyInput(company) { return this.addressInfoCompanyInput().type(company); }
  writeAddressInfoAddress1Input(address1) { return this.addressInfoAddress1Input().type(address1); }
  writeAddressInfoAddress2Input(address2) { return this.addressInfoAddress2Input().type(address2); }
  writeAddressInfoCityInput(city) { return this.addressInfoCityInput().type(city); }
  writeAddressInfoStateInput(state) { return this.addressInfoStateInput().select(state); }
  writeAddressInfoZipInput(zipCode) { return this.addressInfoZipInput().type(zipCode); }
  writeAddressInfoCountryInput(country) { return this.addressInfoCountryInput().select(country); }
  writeAddressInfoMobileInput(mobile) { return this.addressInfoMobileInput().type(mobile); }
  writeAddressInfoAliasInput(alias) { return this.addressInfoAliasInput().clear().type(alias); }

  clickRegisterButton() { 
    cy.intercept('POST', '/index.php?rand**')
      .as('loginResponse');

    this.registerButtonWebElement().click();
  }
} 

export default accountsCreationSurveyPage;