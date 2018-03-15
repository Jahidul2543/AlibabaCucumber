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
  "duration": 31404921661,
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
  "duration": 44830237649,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.enter_invalid_email_and_password()"
});
formatter.result({
  "duration": 9954626683,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.error_message_appear()"
});
formatter.result({
  "duration": 36275834,
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:86)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat org.junit.Assert.assertTrue(Assert.java:52)\r\n\tat pageObjects.SignInPage.verifyErrorMessag(SignInPage.java:251)\r\n\tat stepDefinitions.LoginSteps.error_message_appear(LoginSteps.java:29)\r\n\tat ✽.Then Error message appear(login.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2494585219,
  "status": "passed"
});
});