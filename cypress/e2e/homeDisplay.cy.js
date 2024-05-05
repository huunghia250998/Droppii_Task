import { faker } from '@faker-js/faker';
import { HomePage } from '../code/pages/homePage.js'



const  homePage = new HomePage()
describe("HomePage Display", () => {
  it("Home page should display", () => {
    homePage.openWeb()
    homePage.verifyHomPage()
  });
});