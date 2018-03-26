package cucumberPckg;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;;

@RunWith(Cucumber.class) 
@CucumberOptions(format = {"pretty", "html:target/cucumber", "json:target/cucumber.json"},tags = {"@SmokeTest","~@Regression"},
features = {"E:\\DheerenFramework\\CucumberTest\\src\\test\\java\\cucumberPckg\\TestFeature.feature"})//, tags = {"@SmokeTest","~@Regression"} 

public class TestRunner {}
