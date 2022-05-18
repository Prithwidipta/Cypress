Feature: Odin Department Dashboard Testing

    Scenario:  Department Login
        Given  Open Portal
        When  Enter Username & Password
        And  Validate & Login
        Then  Verify Login Status

   Scenario: Select User
   When Select User form User List
    And  Verify User Url
    Then Come Back To Dashboard
Scenario: Creat User
    When Click on the Create User Button and Enter User Details
    And Verify User Created Successfully
    And Verify User Url
    And Delete User
    Then Verify Url after Deleting
    Scenario: Go to User List
    Then  Come Back To User List
    @Smoke
     Scenario: Auto Attendent Checking
        When Navigate to attendent
        And Enable & Desible
        And Click on Auto Attendent
        Then Edit Audio Setting
        And Add Auto Attendent Menu Keys
        And Update Auto Attendent Menu Keys
        Then Delete Auto Attendent Menu Keys
          Scenario: Checking : Common Phone List
        When Navigate To Dashboard
        And Navigate to Common List
        And Add Common Phone
        And Update Common Phone
        And Delete Common Phone
        # And Upload CSV : Phone List
        # And Validating Add Number
        Then Delete List