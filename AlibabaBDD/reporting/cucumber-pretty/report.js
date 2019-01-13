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
  "duration": 4639031010,
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
  "comments": [
    {
      "line": 6,
      "value": "#When   Enter invalid email and password"
    }
  ],
  "line": 7,
  "name": "Enter invalid email and password from Data Table",
  "rows": [
    {
      "cells": [
        "email",
        "passCode"
      ],
      "line": 8
    },
    {
      "cells": [
        "testdat@gmail.com",
        "testdata"
      ],
      "line": 9
    },
    {
      "cells": [
        "testabc@gmail.com",
        "testabc"
      ],
      "line": 10
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "Error message appear",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_in_login_page()"
});
formatter.result({
  "duration": 62554356655,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_invalid_email_and_password_from_Data_Table(DataTable)"
});
formatter.result({
  "duration": 5423522411,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.error_message_appear()"
});
formatter.result({
  "duration": 40791,
  "status": "passed"
});
formatter.after({
  "duration": 125208412,
  "status": "passed"
});
formatter.uri("search.feature");
formatter.feature({
  "line": 2,
  "name": "Search Feature",
  "description": "In order to search item in search product\nas a user I need to be in Home Page",
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
  "duration": 4085704190,
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
  "duration": 1334002,
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
  "duration": 2739812587,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_Search_Button()"
});
formatter.result({
  "duration": 55702,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.laptop_items_appear()"
});
formatter.result({
  "duration": 53642666,
  "status": "passed"
});
formatter.after({
  "duration": 112675504,
  "status": "passed"
});
formatter.before({
  "duration": 4686935504,
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
  "duration": 1178412,
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
  "duration": 2173593060,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_Search_Button()"
});
formatter.result({
  "duration": 23743,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.laptop_items_appear()"
});
formatter.result({
  "duration": 31879057,
  "status": "passed"
});
formatter.after({
  "duration": 116123071,
  "status": "passed"
});
});