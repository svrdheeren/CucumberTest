package cucumberPckg; 

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When; 

public class StepDef { 
   WebDriver driver = null; 
   @Given("^I am on Facebook login page$") 
	
   public void goToFacebook() { 
	  System.setProperty("webdriver.chrome.driver", "E:\\Selenium Tutorial\\chromedriver_win32\\chromedriver.exe");
      driver = new ChromeDriver(); 
      driver.navigate().to("https://www.facebook.com/"); 
   }
	
   @When("^I enter username as \"(.*)\"$") 
   public void enterUsername(String arg1) {   
	  //String arg11= System.getProperty("username");
      driver.findElement(By.id("email")).sendKeys(arg1); 
   }
	
   @When ("^I enter password as \"(.*)\"$") 
   public void enterPassword(String arg1) {
      driver.findElement(By.id("pass")).sendKeys(arg1);
      driver.findElement(By.xpath("//input[@value='Log In']")).click(); 
   } 
	
   @Then("^Login should fail$") 
   public void checkFail() {  
	   driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
      if(driver.getCurrentUrl().equalsIgnoreCase(
         "https://www.facebook.com/login.php?login_attempt=1&lwv=110")){ 
            System.out.println("Test Pass"); 
      } else { 
         System.out.println("Test Failed"); 
      } 
      //driver.close(); 
   }
	
   @Then("^Relogin option should be available$") 
   public void checkRelogin() { 
	   driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
	   System.out.println(driver.getCurrentUrl());
      if(driver.getCurrentUrl().equalsIgnoreCase("https://www.facebook.com/login.php?login_attempt=1&lwv=110")){ 
            System.out.println("Test Pass"); 
      } else { 
         System.out.println("Test Failed"); 
      } 
   }
 
	
   @When("^I enter invalid data on the page$") 
   public void enterData(DataTable table){ 
      //Initialize data table 
      List<List<String>> data = table.raw();
      /*List<Map<String, String>> data = table.asMaps(String.class, String.class) -- this way to store in key, value pair
      --define in feature file
      |State|City|
      |Karnata|Banglore|
      |MP|Gwalior|
      --Retrieve data
      data.get(0).get("State")
      data.get(0).get("City")
      */
      
      //Enter data
      driver.findElement(By.name("firstname")).sendKeys(data.get(1).get(1));
      driver.findElement(By.name("lastname")).sendKeys(data.get(2).get(1));
      driver.findElement(By.name("reg_email__")).sendKeys(data.get(3).get(1));     
      driver.findElement(By.name("reg_email_confirmation__")).sendKeys(data.get(4).get(1)); 
      driver.findElement(By.name("reg_passwd__")).sendKeys(data.get(5).get(1)); 
      
      Select dropdownB = new Select(driver.findElement(By.name("birthday_day"))); 
      dropdownB.selectByValue("15"); 
		
      Select dropdownM = new Select(driver.findElement(By.name("birthday_month")));
      dropdownM.selectByValue("6"); 
		
      Select dropdownY = new Select(driver.findElement(By.name("birthday_year")));
      dropdownY.selectByValue("1990"); 
		
      driver.findElement(By.className("_58mt")).click(); 
   } 
	
   @Then("^the user registration should be unsuccessful$") 
   public void User_registration_should_be_unsuccessful() {
      if(driver.getCurrentUrl().equalsIgnoreCase("https://www.facebook.com/")){
         System.out.println("Test Pass"); 
      } else { 
         System.out.println("Test Failed"); 
      } 
   } 
      
   @After
   public void closeDriver(){
	   driver.close(); 
   }
} 