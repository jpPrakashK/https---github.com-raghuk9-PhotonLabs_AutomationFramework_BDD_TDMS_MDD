import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(glue = "com/jpmc/poc/StepDefinition", features = "src/test/java/com/jpmc/poc/Feature", format = { "html:target/cucumber-htmlreport", "json:target/cucumber-report.json" }, tags = { "@JPMC_HomeScreen_Scenario,@JPMC_HomeScreen_Search,@JPMC_Navigate_Creditcards,@JPMC_Navigate_Checking"}, monochrome = true)
public class CucumberRunner extends AbstractTestNGCucumberTests {                                                                                                                                    // @Walgreens_HomeScreen_Scenario  //@JPMC_Login_Scenario

}
