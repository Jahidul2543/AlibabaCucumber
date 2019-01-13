package stepDefinitions;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import pageObjects.HomePage;
import pageObjects.SignInPage;
import java.io.IOException;
import java.util.List;
import java.util.Map;

public class LoginSteps extends SignInPage {

    HomePage objHomePage = PageFactory.initElements(driver, HomePage.class);
    SignInPage objOfSignInPage = PageFactory.initElements(driver, SignInPage.class);


     @Given("^User is in login page$")
    public void user_is_in_login_page() throws InterruptedException {
        objHomePage.clikSignIn();
        objOfSignInPage.switchToSignInForm();
    }
     /**
      *
      * DataTable is used to desired record or desired cell info
      * DataTable has a method named asMaps(String arg1, String arg2) which returns a List<Map<String, String>>
      * By the help of this method DataTable can be stored in a reference variable. By get() method we can get the value against the key.
      *
      * */

    @When("^Enter invalid email and password from Data Table$")
    public void enter_invalid_email_and_password_from_Data_Table(DataTable arg1)  {

         List<Map<String, String>> list = arg1.asMaps(String.class, String.class);

        objOfSignInPage.signInUsingDataTable(list.get(0).get("email"),list.get(0).get("passCode"));

        System.out.println("Email "+ list.get(0).get("email")+ "  Password: "+list.get(0).get("passCode"));

        System.out.println("Email "+ list.get(1).get("email")+ "  Password: "+list.get(1).get("passCode"));

        System.out.println("Ran from Data Table");
    }

    @Then("^Error message appear$")
    public void error_message_appear() throws IOException {
        objOfSignInPage.verifyErrorMessag();
       // Assert.assertEquals("actual", "actua");
    }

}
