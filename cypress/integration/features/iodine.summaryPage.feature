Feature: Add validation to the form of the summary page while applying to SDET role of Iodine software
  
  Scenario Outline: Validate that user shouldn't be allowed to enter blank first name,last name and email 
    Given user is in home page of IodineSoftwar & starts applying to "<JobProfile>" under career section
    When user is in the final page of the application workflow
    Then error is thrown if user tries to submit blank first name ,last name & email

Examples:
    | JobProfile                            |
    | Software Development Engineer in Test |

