Feature: annotation 
#This is how background can be used to eliminate duplicate steps 

Background: 
   User navigates to Facebook Given 
   Given I am on Facebook login page 

#Scenario with AND 
@SmokeTest
Scenario: Scenario1
   When I enter username as "TOM"
   And I enter password as "JERRY" 
   Then Login should fail 

#Scenario with BUT 
@Regression
Scenario: Scenario2
   When I enter username as "TOM1" 
   And I enter password as "JERRY1" 
   Then Login should fail 
   But Relogin option should be available
   
#Scenario Outline Example
@SmokeTest
Scenario Outline: Parameterize Test
   When I enter username as "<username>" 
   And I enter password as "<password>" 
   Then Login should fail 

Examples:
|username|password|
|TOM3|JERRY3|
|TOM4|JERRY4|

@SmokeTest
Scenario: Using Data Table
When I enter invalid data on the page
| Fields                 | Values              |
| First Name             | Tom                 |
| Last Name              | Kenny               |
| Email Address          | someone@someone.com |
| Re-enter Email Address | someone@someone.com |
| Password               | Password1           |
| Birthdate              | 01                  |
Then the user registration should be unsuccessful
