@SmokeTest
Feature: Login

  Scenario: Login with invalid credentials
     Given  User is in login page
     When   Enter invalid email and password
     Then   Error message appear


