package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import pageObjects.HomePage;
import pageObjects.SignInPage;
import java.io.IOException;

public class LoginSteps extends ByInputFromExls {

    HomePage objHomePage = PageFactory.initElements(driver, HomePage.class);
    SignInPage objOfSignInPage = PageFactory.initElements(driver, SignInPage.class);

    @Given("^User is in login page$")
    public void user_is_in_login_page() throws InterruptedException {
        objHomePage.clikSignIn();
        objOfSignInPage.switchToSignInForm();
    }

    @When("^Enter invalid email and password$")
    public void enter_invalid_email_and_password() throws IOException {
      objOfSignInPage.sendLoginCredentials();
    }

    @Then("^Error message appear$")
    public void error_message_appear() throws IOException {
        objOfSignInPage.verifyErrorMessag();
    }
}
