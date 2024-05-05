/// <reference types="cypress" />
import { BasePage } from "./basePage"
import { ElementUtils } from '../../core/utils/elementUtils'
import { UserPage } from '../../data/user/data_user'


const utils = ElementUtils(),
      userPage = new UserPage(),
      userData = userPage.generateUserData()

export class SignUpPage extends BasePage {
  aSignUp
  fistNameInput
  lastNameInput
  emailInput
  passwordInput 
  rePasswordInput 
  signUpButton 
  textSuccess 
  
  constructor() {
    super()
    this.aSignUp = 'header *> a[href*="https://magento.softwaretestingboard.com/customer/account/create/"'
    this.fistNameInput = 'input[id="firstname"]'
    this.lastNameInput = 'input[id="lastname"]'
    this.emailInput = 'input[type="email"][id="email_address"]'
    this.passwordInput = 'input[type="password"][id="password"]'
    this.rePasswordInput = 'input[type="password"][id="password-confirmation"]'
    this.textPageDisplay = 'Create New Customer Account'
    this.signUpButton = 'button[type="submit"][title="Create an Account"]'
    this.signUpSuccess = 'div[class="page messages"]> *'
    this.textSuccess = 'Thank you for registering with Main Website Store.'
    this.errorEmail = '*[id="email_address-error"]'
  }


  clickOnSignUpBtn(){
    return utils.clickOn(this.aSignUp)
  }
  verifySignUpPage(){
    cy.get('*').contains( this.textPageDisplay).should('exist')
  }
  fillOutData(){
    cy.get(this.fistNameInput).click().clear().type(userData.firstName)
    cy.get(this.lastNameInput).click().clear().type(userData.lastName)
    cy.get(this.emailInput).click().clear().type(userData.email)
    cy.get(this.passwordInput).click().clear().type("No Password")
    cy.get(this.rePasswordInput).click().clear().type("No Password")
    cy.get(this.signUpButton).click()
  }
  fillInvalidData(){
    cy.get(this.fistNameInput).click().clear().type(userData.firstName)
    cy.get(this.lastNameInput).click().clear().type(userData.lastName)
    cy.get(this.emailInput).click().clear().type("fakememail@")
    cy.get(this.passwordInput).click().clear().type("No Password")
    cy.get(this.rePasswordInput).click().clear().type("No Password")
    cy.get(this.signUpButton).click()
  }

  verifyErrorEmailInvalid(){
    cy.get(this.errorEmail).should('be.visible')
    cy.get(this.errorEmail).invoke('text').should('eq','Please enter a valid email address (Ex: johndoe@domain.com).')
  }

  verifySignUpSuccess(){
    cy.get(this.signUpSuccess).contains(this.textSuccess).should('be.visible')
    //cy.get('div[class="page messages"] > *').should('contain.text',"Thank you for registering with Main Website Store.")
  }
}
