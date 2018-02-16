package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {
    @Given("^User is in login page$")
    public void user_is_in_login_page()  {
        System.out.println("We are here");
    }

    @When("^Enter invalid email and password$")
    public void enter_invalid_email_and_password()  {
        System.out.println("We are here");
    }

    @Then("^Error message appear$")
    public void error_message_appear() {
        System.out.println("We are here");
    }
}
