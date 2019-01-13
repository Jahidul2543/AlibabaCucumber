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
  "duration": 8243056913,
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
  "duration": 67557174307,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_invalid_email_and_password_from_Data_Table(DataTable)"
});
formatter.result({
  "duration": 5488933367,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.error_message_appear()"
});
formatter.result({
  "duration": 22938,
  "status": "passed"
});
formatter.after({
  "duration": 111230886,
  "status": "passed"
});
});