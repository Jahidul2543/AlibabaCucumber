package pageObjects;

import base.CommonAPI;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.IOException;
import java.util.NoSuchElementException;

import static org.openqa.selenium.support.How.ID;
import static org.openqa.selenium.support.How.XPATH;

public class SignInPage extends CommonAPI {

    @FindBy(how = XPATH, using = ".//*[@id='fm-login-id']")
    public static WebElement account;
    @FindBy(how = ID, using = "fm-login-password")
    public static WebElement password;
    @FindBy(id = "fm-login-submit")
    public static WebElement loginSubmit;
    @FindBy(className = "notice-descript")
    public static WebElement signInErrorMesage;
    @FindBy(xpath = "//*[@id=\"login-other\"]/div[2]/a")
    public static WebElement logInByMobileNumber;
    @FindBy(xpath = "//*[@id=\"fm-login-id\"]")
    public static WebElement mobileNumberLogIn;
    @FindBy(css = "#fm-login-password")
    public static WebElement mobileNumberLogInPassword;
    @FindBy(css = "#fm-keep-login")
    public static WebElement staySignedInCheckBox;
    @FindBy(css = "#fm-login-submit")
    public static WebElement submitLoginByMobileNumber;
    @FindBy(linkText = "Join Free")
    public static WebElement joinFreeLink;
    @FindBy(xpath = "//*[@id=\"thirdpart-login\"]/a[1]")
    public static WebElement signInByFacebookIcon;
    @FindBy(xpath = "//*[@id=\"thirdpart-login\"]/a[2]")
    public static WebElement signInByGoogleIcon;
    @FindBy(xpath = "//*[@id=\"thirdpart-login\"]/a[3]")
    public static WebElement signInByLinkedInIcon;
    @FindBy(xpath = "//*[@id=\"thirdpart-login\"]/a[4]")
    public static WebElement signInByTwitterIcon;
    @FindBy(xpath = "//*[@id=\"username_or_email\"]")
    public static WebElement twitterUserName;
    @FindBy(xpath = "//*[@id=\"password\"]")
    public static WebElement twitterPassword;
    @FindBy(xpath = "//*[@id=\"allow\"]")
    public static WebElement twitterSignInButton;
    @FindBy(css = ".message-text")
    public static WebElement twitterLogInErrorMessage;
    @FindBy(css = "a.Icon")
    public static WebElement twitterLogInErrorMessageClose;
    @FindBy(css = ".reg-tip > span:nth-child(2)")
    public static WebElement twitterRegistrationCompletionRequestMessage;
    @FindBy(css = "#email")
    public static WebElement facebookEmailInputBox;
    @FindBy(css = "#pass")
    public static WebElement facebookPasswordInputBox;
    @FindBy(css = "#u_0_0")
    public static WebElement facebookLogInButton;
    @FindBy(css = ".fsl")
    public static WebElement facebookLogInErorMessage;
    @FindBy(id = "identifierId")
    public static WebElement googleEmailInputBox;
    @FindBy(name = "password")
    public static WebElement googlePasswordInputBox;
    @FindBy(css = "#advisory > a:nth-child(2)")
    public static WebElement getHelp;
    @FindBy(xpath = "//div[@id='password']/div[2]/div[2]")
    public static WebElement gmailErrorMessage;

    //Switch to Sign In form
    public void switchToSignInForm() {
        driver.switchTo().frame("alibaba-login-box");
    }

   //Data Table Cucumber
   public String signInUsingDataTable(String email, String passCode) throws InterruptedException {
       account.sendKeys(email);
       password.sendKeys(passCode);
       Thread.sleep(5000);
       loginSubmit.click();
       String errorMessage = signInErrorMesage.getText();
       System.out.println("Sign In Error Message" + errorMessage);
       return errorMessage;
   }
    //T3ALI_SI_TC01,
    // Sign in with invalid id and email
    public String signIn() throws InterruptedException {
        account.sendKeys("testdata@gmail.com");
        password.sendKeys("testdata");
        loginSubmit.click();
        String errorMessage = signInErrorMesage.getText();
        System.out.println("Sign In Error Message" + errorMessage);
        return errorMessage;
    }

    //Sign In By Mobile Number link status
    public boolean signInByMobileNumberLink() {
        boolean bl = logInByMobileNumber.isEnabled();
        return bl;
    }

    //Sign Join Free link status
    public boolean joinFreeLinkStatus() {
        boolean b2 = joinFreeLink.isEnabled();
        return b2;
    }

    // Sign In BY invalid Mobile Number
    public String signInByMobileNumber() {
        logInByMobileNumber.click();
        try {
            wait(driver, 5);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        mobileNumberLogIn.sendKeys("1234567");
        mobileNumberLogInPassword.sendKeys("aaddd");
        staySignedInCheckBox.click();
        submitLoginByMobileNumber.click();
        implicitWait(driver,5);

        String actualArrorMessage = signInErrorMesage.getText();
        System.out.println("Print error message " + actualArrorMessage);
        return actualArrorMessage;
    }

    // Sign in by Facebook icon Status
    public boolean signInByFacebookIconStatus() {
        boolean bl = signInByFacebookIcon.isEnabled();
        return bl;
        // Assert.assertEquals(bl, true);
    }

    //T3ALI_SI_TC07, Sign in by Google icon Status
    public boolean signInByGoogleIconStatus() {
        boolean bl = signInByGoogleIcon.isEnabled();
        return true;
    }

    //T3ALI_SI_TC08, Sign in by LinkedIn icon Status
    public boolean signInByLinkInIconStatus() {
        boolean bl = signInByLinkedInIcon.isEnabled();
        return bl;
    }

    //T3ALI_SI_TC09, Sign in by Twitter icon Status
    public boolean signInByTwiterIconStatus() {
        boolean bl = signInByTwitterIcon.isEnabled();
        return bl;
    }

    //T3ALI_SI_TC10, Sign in by invalid(email & password) Twitter account
    public String signInByInvalidTwitterAccount() {
        try {
            signInByTwitterIcon.click();
        } catch (NoSuchElementException e) {
            e.printStackTrace();
        }
        for (String handle : driver.getWindowHandles()) {
            driver.switchTo().window(handle);
        }
        twitterUserName.sendKeys("testdata.islam@gmail.com");
        twitterPassword.sendKeys("123456");
        twitterSignInButton.click();
        String actualErrorMessage = twitterLogInErrorMessage.getText();
        System.out.println("Twitter Sign In Actual Error Message: " + actualErrorMessage);
        twitterLogInErrorMessageClose.click();
        return actualErrorMessage;
    }

    //T3ALI_SI_TC11, Sign in by invalid(email & password) Twitter account
    public String signInByValidTwitterAccount() {
        try {
            signInByTwitterIcon.click();
        } catch (NoSuchElementException e) {
            e.printStackTrace();
        }
        for (String handle : driver.getWindowHandles()) {
            driver.switchTo().window(handle);
        }
        twitterUserName.sendKeys("testdata.islam@gmail.com");
        twitterPassword.sendKeys("jitu2543");
        twitterSignInButton.click();
        implicitWait(driver,5);

        String actuaMessage = twitterRegistrationCompletionRequestMessage.getText();
        return actuaMessage;
    }

    //T3ALI_SI_TC12 , Sign in by invalid(email & password) Twitter account
    public String signInByInvalidFacebookAccount() {
        try {
            signInByFacebookIcon.click();
        } catch (NoSuchElementException e) {
            e.printStackTrace();
        }
        for (String handle : driver.getWindowHandles()) {
            driver.switchTo().window(handle);
        }
        facebookEmailInputBox.sendKeys("testdata.islam@gmail.com");
        facebookPasswordInputBox.sendKeys("123456");
        facebookLogInButton.click();
        String actualErrorMessage = facebookLogInErorMessage.getText();
        System.out.println("Sign In Facebook Actual Error Message: " + actualErrorMessage);
        return actualErrorMessage;
    }

    //T3ALI_SI_TC13, Sign In By Valid google account
    public void signInByValidGooleAcount() {
        try {
            signInByGoogleIcon.click();
        } catch (NoSuchElementException e) {
            e.printStackTrace();
        }
        for (String handle : driver.getWindowHandles()) {
            driver.switchTo().window(handle);
        }
        googleEmailInputBox.sendKeys("testdata.islam@gmail.com" + Keys.ENTER);
        googlePasswordInputBox.sendKeys("testdata" + Keys.ENTER);
    }

    // Get Help Here option verification
    public void getHlepHere() {
        getHelp.click();
    }
    // Send email and password for Google Account
    public String sendGoogleIdAndPassword() {
        System.out.println(driver.getTitle());
        googleEmailInputBox.sendKeys("testdata.islam@gmail.com" + Keys.ENTER);
        googlePasswordInputBox.sendKeys("testdat" + Keys.ENTER);
        String text = gmailErrorMessage.getText();
        return text;
    }
    String[] actual;
    //To read data from Excel File(Login Information)
    public void sendLoginCredentials() throws IOException {
        String[] col2Value =  readDataFromExcelSheetColumn("../AlibabaBDD/data/DataFile.xls", 2);
        String[] col3Value =  readDataFromExcelSheetColumn("../AlibabaBDD/data/DataFile.xls", 3);
        actual = new String[col2Value.length];
        for (int i = 0; i < col2Value.length; i++) {
            inputValueInTextBoxByWebElement(account, col2Value[i]);
            //sleepFor(5);
            inputValueInTextBoxByWebElement(password, col3Value[i]);
            // sleepFor(5);
            // actual[i] = getCurrentPageTitle();
            actual[i] = getTextByWebElement(signInErrorMesage);
            //sleepFor(5);
            System.out.println(actual[i]);
            clearInputBox(account);
            clearInputBox(password);
        }

    }
    public void verifyErrorMessag() throws IOException {
       // String[] expectedItems = readDataFromExcelSheetColumn("../AlibabaBDD/data/DataFile.xls", 4);
       // for (int i = 0; i < actual.length; i++) {
           // Assert.assertTrue(actual[i].contains(expectedItems[i]));
          //  System.out.println(expectedItems[i] + ": Test - Passed");
        //}
    }
}
