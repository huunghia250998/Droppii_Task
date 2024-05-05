/// <reference types="cypress" />
export function ElementUtils(){
    function getElement(locator, parent){
        if(parent){
            return parent.find(locator)
        }
        return cy.get(locator)
    }
    function clearInput(componentDescription, inputToClear) {
      try {
        return getElement(inputToClear).clear({force: true})
      } catch (err) {
        let msg = `Error trying to clear input`;
        throw msg;
      }
    }
    function typeText(classDescription, inputElement, valueToType) {
      try {
        return getElement(inputElement).type(valueToType, {force: true})
      } catch (err) {
        let msg = `Error trying to type text in element`;
        throw msg;
      }
    }
    return{
        getElement,
        clickOn( elementToClick, force) {
            try {
              return getElement(elementToClick).click({force: force || false})
               
            } catch {
              throw "Error";
            }
          },
          clearAndType(classDescription, inputElement, valueToType) {
            return clearInput(classDescription, inputElement)
              .then(() => typeText(classDescription, inputElement, valueToType))
          },  
    }
}