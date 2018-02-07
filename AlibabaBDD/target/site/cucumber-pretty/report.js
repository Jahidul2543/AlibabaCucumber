$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search Feature",
  "description": "In order to search item in search product\r\nas a user I need to be in Home Page",
  "id": "search-feature",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11728057730,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Search Laptop",
  "description": "",
  "id": "search-feature;search-laptop",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am in Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Enter product name Laptop in search box",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Laptop items appear",
  "keyword": "Then "
});
formatter.match({
  "location": "SearchSteps.i_am_in_Home_Page()"
});
formatter.result({
  "duration": 9111043762,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.enter_product_name_Laptop_in_search_box()"
});
formatter.result({
  "duration": 9760278968,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.click_Search_Button()"
});
formatter.result({
  "duration": 138253,
  "status": "passed"
});
formatter.match({
  "location": "SearchSteps.laptop_items_appear()"
});
formatter.result({
  "duration": 683025516,
  "status": "passed"
});
formatter.after({
  "duration": 1918680481,
  "status": "passed"
});
});