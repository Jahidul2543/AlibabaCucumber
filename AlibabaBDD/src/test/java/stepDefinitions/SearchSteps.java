package stepDefinitions;

import base.CommonAPI;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import pageObjects.HomePage;

public class SearchSteps extends CommonAPI {
    HomePage objHomePage = PageFactory.initElements(driver, HomePage.class);

    @Given("^I am in Home Page$")
    public void i_am_in_Home_Page() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        driver.get("https://www.alibaba.com/");
        //throw new PendingException();
    }

    @When("^Enter product name Laptop in search box$")
    public void enter_product_name_Laptop_in_search_box() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        objHomePage.enterProductName();
        //throw new PendingException();
    }

    @When("^Click Search Button$")
    public void click_Search_Button() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        objHomePage.clcikSearchButton();
        //throw new PendingException();
    }

    @Then("^Laptop items appear$")
    public void laptop_items_appear() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        objHomePage.userInLaptopPage();
        //throw new PendingException();
    }
}
