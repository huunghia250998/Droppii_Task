import { HomePage } from '../code/pages/homePage.js'
import { SignUpPage } from '../code/pages/signUpPage.js'


const      homePage = new HomePage(),
      signUpPage = new SignUpPage()


describe("SignUp Function Verify", () => {
  it("Sign Up", () => {
    // Invoke home page
    homePage.openWeb()
    // Invoke sign up page
    signUpPage.clickOnSignUpBtn()
   
    // Verify invoke signup page successfully
    signUpPage.verifySignUpPage()

    // Fill data user
    signUpPage.fillOutData()

    // Verify Sign Up Successfully
    signUpPage.verifySignUpSuccess()
  });

});