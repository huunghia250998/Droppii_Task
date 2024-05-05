/// <reference types="cypress" />

import { BasePage } from "./basePage"
import { ElementUtils } from '../../core/utils/elementUtils'

const utils = ElementUtils()

export class HomePage extends BasePage {
  url = 'https://magento.softwaretestingboard.com/'

  
  constructor() {
    super()
  }

  openWeb(){
    return cy.visit(this.url)
  }
  verifyHomPage(){
    cy.title().should('eq','Home Page')
  }
}
//module.exports = new HomePage();