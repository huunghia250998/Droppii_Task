import { HomePage } from '../code/pages/homePage.js'
import { SignInPage } from '../code/pages/signInPage.js'
import { SignUpPage } from '../code/pages/signUpPage.js'



const homePage = new HomePage(),
      signInPage = new SignInPage(),
      signUpPage = new SignUpPage()


describe("SignIn Function Verify", () => {

  it("Sign Up then Sign In", () => {
    // Invoke home page
    homePage.openWeb()

    //SignUpForLogin
    signInPage.clickOnSignUpBtn()
    signInPage.fillOutData()
    signInPage.verifySignUpSuccess()
    signInPage.signOut()


    // Invoke sign up page
    signInPage.clickOnSignInBtn()

    // Verify invoke signup page successfully
    signInPage.verifySignInPage()

    // Fill data user
    signInPage.fillOutDataLogin()

    // Verify Sign Up Successfully
    signInPage.verifySignInSuccess()

  });
});