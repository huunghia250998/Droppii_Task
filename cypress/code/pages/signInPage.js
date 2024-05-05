/// <reference types="cypress" />

import { BasePage } from "./basePage"
import { ElementUtils } from '../../core/utils/elementUtils'
import { UserPage } from '../../data/user/data_user'


const utils = ElementUtils(),
      userPage = new UserPage(),
      userData = userPage.generateUserData()


export class SignInPage extends BasePage {
  aSignIn
  textPageLoginDisplay
  emailInput
  passwordInput 
  signInButton 
  welcomeMenu

  
  constructor() {
    super()
    ///// Sign In
    this.aSignIn = 'header *> a:contains("Sign In")'
    this.textPageLoginDisplay = 'span:contains("Customer Login")'
    this.emailInputSI = 'input[type="email"][name="login[username]"]'
    this.passwordInputSI = 'input[type="password"][name="login[password]"]'
    this.signInButton = 'button[type="submit"][class="action login primary"]:contains("Sign In")'
    this.welcomeMenu = 'header *> li[class="customer-welcome"] *> button[type="button"]'
    this.signOutBtn = 'div[class="customer-menu"] *> a[href*="https://magento.softwaretestingboard.com/customer/account/logout/"]'
    ///// Sign Up
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
  }
  clickOnSignInBtn(){
    return utils.clickOn(this.aSignIn)
  }
  verifySignInPage(){
    cy.get(this.textPageLoginDisplay).should('exist')
  }
  fillOutDataLogin(){
    cy.get(this.emailInputSI).click().clear().type(userData.email)
    cy.get(this.passwordInputSI).click().clear().type("No Password")
    cy.get(this.signInButton).click()
  }
  verifySignInSuccess(){
    cy.contains("Welcome, "+userData.firstName +" "+userData.lastName).should('be.visible')
  }
  signOut(){
    cy.get(this.welcomeMenu).click()
    cy.get(this.signOutBtn).eq(0).should('be.visible').click()
  }




///////////////////////
//Sign Up Field

  clickOnSignUpBtn(){
    return utils.clickOn(this.aSignUp)
  }
  verifySignUpPage(){
    cy.get(this.textPageDisplay).should('be.visible')
  }
  fillOutData(){
    cy.get(this.fistNameInput).click().clear().type(userData.firstName)
    cy.get(this.lastNameInput).click().clear().type(userData.lastName)
    cy.get(this.emailInput).click().clear().type(userData.email)
    cy.get(this.passwordInput).click().clear().type("No Password")
    cy.get(this.rePasswordInput).click().clear().type("No Password")
    cy.get(this.signUpButton).click()
  }
  verifySignUpSuccess(){
    cy.get(this.signUpSuccess).contains(this.textSuccess).should('be.visible')
    //cy.get('div[class="page messages"] > *').should('contain.text',"Thank you for registering with Main Website Store.")
  }
}
