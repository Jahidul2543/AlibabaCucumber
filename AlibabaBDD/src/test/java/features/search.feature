Feature: Search Feature
  In order to search item in search product
  as a user I need to be in Home Page
  Scenario: Search Laptop
    Given I am in Home Page
    When Enter product name Laptop in search box
    And Click Search Button
    Then  Laptop items appear
