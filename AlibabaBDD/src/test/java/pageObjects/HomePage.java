package pageObjects;

import base.CommonAPI;
import org.openqa.selenium.*;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.ArrayList;
import java.util.List;

public class HomePage extends CommonAPI {

    @FindBy(name = "SearchText")
    public static WebElement searchBox;
    @FindBy(xpath = "//div[@id=\"J_SC_header\"]//form/div[1]/div/div/span[1]")
    public static WebElement productSearchOption;
    @FindBy(xpath = "//div[@id=\"J_SC_header\"]//form/div[1]/div/div/span[1]")
    public static WebElement suppliersSearchOption;
    @FindBy(xpath = "//div[@id=\"J_SC_header\"]//form/div[1]/div/div/span[2]")
    public static WebElement quotesSearchOptin;
    @FindBy(xpath = "//*[@id=\"J_SC_header\"]//input[4]")
    public static WebElement searchButton;
    @FindBy(xpath = "//*[@id=\"J_SC_header\"]/header/div[1]/div[3]/ul/li[1]/span")
    public static WebElement sourcingSolutions;
    @FindBy(partialLinkText = "Top Selected")
    public static WebElement topSelectedSuppliers;
    @FindBy(partialLinkText = "Sign In")
    public static WebElement signInButton;
    @FindBy(partialLinkText = "Get the App")
    public static WebElement getTheAppLink;
    @FindBy(partialLinkText = "One Request")
    public static WebElement oneRequestButton;
    @FindBy(partialLinkText = "Favorites")
    public static WebElement favoriteLink;
    @FindBy(xpath = "//div[@id=\"J_SC_header\"]/header/div[2]/div[1]/div/div/h3")
    public static WebElement categories;
    @FindBy(partialLinkText = "Machinery")
    private WebElement machinery;
    @FindBy(partialLinkText = "Hand Tools")
    private WebElement handTools;
    @FindBy(xpath = "//a[@class='more' and @href='javascript:;']")
    private WebElement seeMore;
    @FindBy(xpath = "//div/a[text()='Alibaba.com']")
    private WebElement logo;
    @FindBy(xpath = "//a[@data-val='ordericon']")
    private WebElement orderProtectionButton;
    //After sign under MyAccount this location shall be available
    @FindBy(css = ".sc-hd-ms-name")
    public static WebElement greetingsToAccountHolder;
    @FindBy(partialLinkText = "My Alibaba")
    public static WebElement myAlibaba;
    @FindBy(css = ".J-search-text")
    public static WebElement emailBoxToSubscribeForTradeAlert;
    @FindBy(css = ".J-btn-search")
    public static WebElement tradeAlertSubscriptionButton;
    //Footer
    @FindBy(xpath = "//*[@id=\"ui-footer\"]//div[1]/dl/dd[1]/a")
    public static WebElement helpCenterLink;
    @FindBy(xpath = "//*[@id=\"J_SC_header\"]/header/div[2]/div[1]/div[1]/a")
    public static WebElement verificationPointHelpCenter;
    @FindBy(xpath = "//dd/a[contains (text(), 'About Alibaba.com')]")
    public static WebElement aboutAlibabaLink;
    @FindBy(xpath = "//h2[contains (text(), 'About Alibaba.com')]")
    public static WebElement verificationPointAboutAlibaba;
    @FindBy(xpath = "//dd/a[contains (text(),'Wholesaler Market')]")
    public static WebElement wholesalerMarket;
    @FindBy(linkText = "Wholesaler Market")
    public static WebElement vaerificationPointAWholesaleMarket;
    @FindBy(xpath = "/html/body/div[5]/div/div/i")
    public static WebElement moveToTopButton;
    @FindBy(xpath = "//input[@name='rfqName']")
    public static WebElement productNameForQuotes;
    @FindBy(xpath = "//input[@name='quantity']")
    public static WebElement quantity;
    @FindBy(xpath = "//form/div[3]/div")
    public static WebElement clickUnit;
    @FindBy(xpath = "/html/body/div[7]/ul/li[6]/a")
    public static WebElement selectUnit;
    @FindBy(css = ".ui2-tag-body")
    public static WebElement requestPrice;
    @FindBy(css = ".rfq-submit")
    public static WebElement requestForQuotation;
    @FindBy(css = ".control-detail")
    public static WebElement productDetailedSpecifications;
    @FindBy(xpath = "//div[@id='post-wrap']//form//button")
    public static WebElement submitRFQ;
    @FindBy(css = "#xjoinFirstName")
    public static WebElement fNamePoPUpSignInWindow;
    @FindBy(xpath = "//div[@id='thirdPartLogin']/a[2]")
    public static WebElement googleIconOnPoPUpSignInWindow;
    @FindBy(tagName = "a")
    public List<WebElement> anchorTag = new ArrayList<>();
    @FindBy(xpath = "//*[@id=\"post-wrap\"]/div/form/div[4]/div/div[1]/div/div[3]/div/div/div[2]/div[2]/div[2]")
    public static WebElement uploadFile;
    @FindBy(xpath = "//div[2]/div[1]/div[2]/div[2]/a[1]")
    public static WebElement downloadAPK;
    @FindBy(xpath = "//*[@id=\"top\"]/div[2]/div/div[3]//div[2]/a")
    public static WebElement downloadWhatsApp;

    public void enterProductName(String product) {
        System.out.println("Home Page title: " + driver.getTitle());
        searchBox.sendKeys(product, Keys.ENTER);
    }
    public void clcikSearchButton(){
        //searchButton.click();
    }
    public void userInLaptopPage(){
        String title = driver.getTitle();
        System.out.println("Get Product Search Page Title: " + title);
    }

}
