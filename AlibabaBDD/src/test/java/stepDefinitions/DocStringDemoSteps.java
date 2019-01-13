package stepDefinitions;

import cucumber.api.java.en.Given;

public class DocStringDemoSteps {

    /**
     *
     * How to parse a String value to Step Definition
     * arg1 can be any given Title by the user. If no value defined by user system will take "Random" as value
     * arg2 holds the value of parsed Doc String
     * Reference Link:  https://docs.cucumber.io/gherkin/reference/#data-tables
     *
     * */

    @Given("^a blog post named \"([^\"]*)\" with Markdown body$")
    public void a_blog_post_named_with_Markdown_body(String arg1, String arg2) {
        arg1 = "This is a Doc String parsing demo ";
        System.out.println("arg1: " + arg1 + " " + "arg2: " +arg2);

    }
}
