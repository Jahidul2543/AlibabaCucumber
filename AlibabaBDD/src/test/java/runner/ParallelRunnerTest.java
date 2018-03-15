package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = {"src/test/java/features"} ,
        format = {"pretty","json:reporting/cucumber.json","html:reporting/cucumber-pretty","junit:reporting/junit_xml/cucumber.xml"},
        glue = "stepDefinitions",
        strict = false,
        monochrome = true,
        tags = {"@SmokeTest"},
        dryRun =false)

public class ParallelRunnerTest {

}
//AbstractTestNGCucumberTests
// To run individual scenerio features = {"src/test/java/features/login.feature:4"}
/*@CucumberOptions(
   features = the path of the feature files
   glue=the path of the step definition files
   format= to generate different types of reporting
   monochrome = display the console output in a proper readable format
   strict = it will check if any step is not defined in step definition file
   dryRun = to check the mapping is proper between feature file and step def file
   )
   @FunctionalTest
Feature: Free CRM application testing

@SmokeTest @RegressionTest
Scenario: Login with correct username and correct password
Given This is a valid login test

@RegressionTest
Scenario: Login with incorrect username and correct password
Given This is a invalid login test

@SmokeTest
Scenario: Create a contact
Given This is a contact test case

@SmokeTest @RegressionTest
Scenario: Create a deal
Given This is a deal test case

@RegressionTest
Scenario: Create a tasks
Given This is a tasks test case

@SmokeTest
Scenario: Create a case
Given This is a case test case

@SmokeTest @RegressionTest
Scenario: Verify left panel links
Given clicking on left panel links

@SmokeTest
Scenario: Search a deal
Given This is a search deal test

@SmokeTest
Scenario: Search a contact
Given This is a search contact test

@SmokeTest @RegressionTest
Scenario: Search a case
Given This is a search case test

@SmokeTest @RegressionTest
Scenario: Search a task
Given This is a search task test

@SmokeTest @End2End
Scenario: Search a call
Given This is a search call test

@SmokeTest @End2End
Scenario: Search an email
Given This is a search email test

@SmokeTest @End2End
Scenario: Search a docs
Given This is a search docs test

@SmokeTest @End2End
Scenario: Search a forms
Given This is a search forms test

@End2End
Scenario: validate a report
Given This is a report test

@End2End
Scenario: Application Logout
Given This is a logout test

Scenario: browser closed
Given This is a close broswer test
   */

