/// <reference types="cypress" />

import { BasePage } from "./basePage"
import { ElementUtils } from '../../core/utils/elementUtils'

const utils = ElementUtils()

export class HomePage extends BasePage {
  url = 'https://magento.softwaretestingboard.com/'

  
  constructor() {
    super()

    this.menuNav = 'ul[role="menu"]'
    this.searchBox = 'div[class="field search"] *> input[id="search"]'
    this.footer = 'div[class="footer content"]'
  }

  openWeb(){
    return cy.visit(this.url)
  }
  verifyHomPage(){
    cy.title().should('eq','Home Page')
    cy.get(this.menuNav).should('be.visible')
    cy.get(this.searchBox).should('be.visible')
    cy.get(this.footer).should('be.visible')

  }
}
//module.exports = new HomePage();