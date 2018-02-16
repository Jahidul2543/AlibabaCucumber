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
  "duration": 4326014615,
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
  "name": "Enter invalid  email and password",
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
  "duration": 167335389,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "LoginSteps.error_message_appear()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1701351491,
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
  "line": 5,
  "name": "Search Laptop",
  "description": "",
  "id": "search-feature;search-laptop",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "I am in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter product name \"\u003cLaptop\u003e\" in search box",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Laptop items appear",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-feature;search-laptop;",
  "rows": [
    {
      "cells": [
        "Laptop"
      ],
      "line": 11,
      "id": "search-feature;search-laptop;;1"
    },
    {
      "cells": [
        "Dell"
      ],
      "line": 12,
      "id": "search-feature;search-laptop;;2"
    },
    {
      "cells": [
        "Asus"
      ],
      "line": 13,
      "id": "search-feature;search-laptop;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2117105734,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
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
  "line": 6,
  "name": "I am in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter product name \"Dell\" in search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Laptop items appear",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_in_Home_Page()"
});
formatter.result({
  "duration": 8367981734,
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
  "duration": 6205046873,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_Search_Button()"
});
formatter.result({
  "duration": 73050,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.laptop_items_appear()"
});
formatter.result({
  "duration": 64306034,
  "status": "passed"
});
formatter.after({
  "duration": 1022046110,
  "status": "passed"
});
formatter.before({
  "duration": 2100773851,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
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
  "line": 6,
  "name": "I am in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Enter product name \"Asus\" in search box",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Laptop items appear",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_in_Home_Page()"
});
formatter.result({
  "duration": 9365132167,
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
  "duration": 6515235524,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_Search_Button()"
});
formatter.result({
  "duration": 73050,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.laptop_items_appear()"
});
formatter.result({
  "duration": 53461379,
  "status": "passed"
});
formatter.after({
  "duration": 971957725,
  "status": "passed"
});
});