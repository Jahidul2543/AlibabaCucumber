$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "Login",
  "description": "",
  "id": "login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "duration": 40742688929,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Login with invalid credentials",
  "description": "",
  "id": "login;login-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "User is in login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter invalid email and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Error message appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 52390751707,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_invalid_email_and_password()"
});
formatter.result({
  "duration": 15075808746,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.error_message_appear()"
});
formatter.result({
  "duration": 37903468,
  "status": "passed"
});
formatter.after({
  "duration": 3904873364,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "Search Feature",
  "description": "In order to search item in search product\r\nas a user I need to be in Home Page",
  "id": "search-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Search Laptop",
  "description": "",
  "id": "search-feature;search-laptop",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter product name \"\u003cProduct\u003e\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Laptop items appear",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-feature;search-laptop;",
  "rows": [
    {
      "cells": [
        "Product"
      ],
      "line": 13,
      "id": "search-feature;search-laptop;;1"
    },
    {
      "cells": [
        "Dell"
      ],
      "line": 14,
      "id": "search-feature;search-laptop;;2"
    },
    {
      "cells": [
        "Asus"
      ],
      "line": 15,
      "id": "search-feature;search-laptop;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 28977595883,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Search Laptop",
  "description": "",
  "id": "search-feature;search-laptop;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter product name \"Dell\" in search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Laptop items appear",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_in_Home_Page()"
});
formatter.result({
  "duration": 11397061,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dell",
      "offset": 20
    }
  ],
  "location": "SearchSteps.enter_product_name_Laptop_in_search_box(String)"
});
formatter.result({
  "duration": 23829790895,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_Search_Button()"
});
formatter.result({
  "duration": 188965,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.laptop_items_appear()"
});
formatter.result({
  "duration": 1774399418,
  "status": "passed"
});
formatter.after({
  "duration": 2755180537,
  "status": "passed"
});
formatter.before({
  "duration": 29546700298,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Search Laptop",
  "description": "",
  "id": "search-feature;search-laptop;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@FunctionalTest"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Enter product name \"Asus\" in search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Laptop items appear",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_in_Home_Page()"
});
formatter.result({
  "duration": 8350077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asus",
      "offset": 20
    }
  ],
  "location": "SearchSteps.enter_product_name_Laptop_in_search_box(String)"
});
formatter.result({
  "duration": 31704272298,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_Search_Button()"
});
formatter.result({
  "duration": 129197,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.laptop_items_appear()"
});
formatter.result({
  "duration": 1726357650,
  "status": "passed"
});
formatter.after({
  "duration": 3458076953,
  "status": "passed"
});
});