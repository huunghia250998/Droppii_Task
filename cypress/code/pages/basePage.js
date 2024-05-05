/// <reference types="cypress" />

class BasePage {
    constructor() {
      this.closeStonlyBtn = '.css-1o6lkht > svg';
    }
  
    /**
     * wrapper for visit so we can use relative urls and append them to baseUrl
     * @param {string} [relativeUrl='']
     */
    goto(relativeUrl = '') {
      cy.visit(relativeUrl);
    }
  }
  
export default { BasePage };
  
  