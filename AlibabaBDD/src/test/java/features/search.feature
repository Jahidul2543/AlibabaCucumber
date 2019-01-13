@FunctionalTest
Feature: Search Feature
  In order to search item in search product
  as a user I need to be in Home Page

 #The Scenario Outline keyword can be used to run the same Scenario multiple times,
 # with different combinations of values.
 # The keyword Scenario Template is a synonym of the keyword Scenario Outline.

  Scenario Outline: Search Laptop
    Given I am in Home Page
    When Enter product name "<Product>" "<Productt>"  in search box
    And  Click Search Button
    Then Laptop items appear

    Examples:
      | Product |  Productt |
      | Dell   |Mac  |
      | Asus   |Hp   |


