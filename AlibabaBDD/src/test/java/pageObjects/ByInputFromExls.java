package pageObjects;

import base.CommonAPI;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.io.IOException;

import static org.openqa.selenium.support.How.ID;
import static org.openqa.selenium.support.How.XPATH;

public class ByInputFromExls extends CommonAPI {
    @FindBy(how = XPATH, using = ".//*[@id='fm-login-id']")
    public static WebElement account;
    @FindBy(how = ID, using = "fm-login-password")
    public static WebElement password;
    @FindBy(className = "notice-descript")
    public static WebElement signInErrorMesage;



  /*  public String[] sendLoginCredentials() throws IOException{
        String[] col2Value =  readDataFromExcelSheetColumn("AlibabaBDD/data/DataFile.xls", 2);
        String[] col3Value =  readDataFromExcelSheetColumn("AlibabaBDD/data/DataFile.xls", 3);
        String[] actual = new String[col2Value.length];
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
        return actual;
    }*/
    // For KeyWord Driven
    /*public String[] getDataFromSignInKeyword(String fileName) throws IOException {
        String path = "../AliBaba/data/" + fileName;
        String[] output = dtr.colReader(path, 2); //col 2 = email
        return output;
    }*/
}
