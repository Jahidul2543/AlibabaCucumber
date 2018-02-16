package stepDefinitions;

import base.CommonAPI;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.chrome.ChromeDriver;

public class Hook extends CommonAPI {
    @Before
    public  void initializeTest() {
        String getOsNameFromSystem = System.getProperty("os.name");
        System.out.println("Opening the browser : Chrome");
        if(getOsNameFromSystem.contains("Mac")){
            System.setProperty("webdriver.chrome.driver", "AlibabaBDD/driver/chromedriver");
        }else if(getOsNameFromSystem.contains("Windows")){
            System.setProperty("webdriver.chrome.driver", "driver/chromedriver.exe");
        }
        driver = new ChromeDriver();
        //driver = new FirefoxDriver();
    }
    @After
    public void tearDownTest(Scenario scenario) {
        if (scenario.isFailed()) {
            System.out.println(scenario.getName());
        }
        System.out.println("Closing the browser : Chrome");
        driver.quit();
    }

}
