package stepDefinitions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.support.PageFactory;
import pageObjects.HomePage;

public class SearchSteps extends HomePage {
    HomePage objHomePage = PageFactory.initElements(driver, HomePage.class);

    @Given("^I am in Home Page$")
    public void i_am_in_Home_Page(){
        System.out.println("You are in Home Page");
    }

    @When("^Enter product name \"([^\"]*)\" \"([^\"]*)\"  in search box$")
    public void enter_product_name_in_search_box(String product, String productt){
        objHomePage.enterProductName(product);
        System.out.println("Searching Product: " + product);
        objHomePage.enterProductName(productt);
        System.out.println("Searching Productt: " + productt);
    }

    @When("^Click Search Button$")
    public void click_Search_Button() {
        objHomePage.clcikSearchButton();
    }

    @Then("^Laptop items appear$")
    public void laptop_items_appear() {
        objHomePage.userInLaptopPage();
    }
}