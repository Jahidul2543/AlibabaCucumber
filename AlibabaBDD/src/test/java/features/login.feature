@SmokeTest
Feature: Login

   Scenario: Login with invalid credentials
     Given  User is in login page
     #When   Enter invalid email and password
     When   Enter invalid email and password from Data Table
     | email             | passCode |
     | testdat@gmail.com | testdata |
     | testabc@gmail.com | testabc  |

    Then   Error message appear


