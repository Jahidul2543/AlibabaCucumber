$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
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
  "comments": [
    {
      "line": 6,
      "value": "#The Scenario Outline keyword can be used to run the same Scenario multiple times,"
    },
    {
      "line": 7,
      "value": "# with different combinations of values."
    },
    {
      "line": 8,
      "value": "# The keyword Scenario Template is a synonym of the keyword Scenario Outline."
    }
  ],
  "line": 10,
  "name": "Search Laptop",
  "description": "",
  "id": "search-feature;search-laptop",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Enter product name \"\u003cProduct\u003e\" \"\u003cProductt\u003e\"  in search box",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Laptop items appear",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-feature;search-laptop;",
  "rows": [
    {
      "cells": [
        "Product",
        "Productt"
      ],
      "line": 17,
      "id": "search-feature;search-laptop;;1"
    },
    {
      "cells": [
        "Dell",
        "Mac"
      ],
      "line": 18,
      "id": "search-feature;search-laptop;;2"
    },
    {
      "cells": [
        "Asus",
        "Hp"
      ],
      "line": 19,
      "id": "search-feature;search-laptop;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4397050496,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
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
  "line": 11,
  "name": "I am in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Enter product name \"Dell\" \"Mac\"  in search box",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Laptop items appear",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_in_Home_Page()"
});
formatter.result({
  "duration": 92838404,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dell",
      "offset": 20
    },
    {
      "val": "Mac",
      "offset": 27
    }
  ],
  "location": "SearchSteps.enter_product_name_in_search_box(String,String)"
});
formatter.result({
  "duration": 3288435375,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_Search_Button()"
});
formatter.result({
  "duration": 18926,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.laptop_items_appear()"
});
formatter.result({
  "duration": 95334226,
  "status": "passed"
});
formatter.after({
  "duration": 137303092,
  "status": "passed"
});
formatter.before({
  "duration": 4778230620,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
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
  "line": 11,
  "name": "I am in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Enter product name \"Asus\" \"Hp\"  in search box",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Laptop items appear",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_in_Home_Page()"
});
formatter.result({
  "duration": 920192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Asus",
      "offset": 20
    },
    {
      "val": "Hp",
      "offset": 27
    }
  ],
  "location": "SearchSteps.enter_product_name_in_search_box(String,String)"
});
formatter.result({
  "duration": 3500291343,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_Search_Button()"
});
formatter.result({
  "duration": 30056,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.laptop_items_appear()"
});
formatter.result({
  "duration": 6523914,
  "status": "passed"
});
formatter.after({
  "duration": 137427171,
  "status": "passed"
});
});