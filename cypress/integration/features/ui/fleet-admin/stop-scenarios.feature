Feature: stops related test cases under fleet admin portal

    All stop related test cases developed in this feature file

    Background: fleet-admin login page
        Given user navigates to login page
        Given user enter Email in email field
        Given user enter Password in password field
        Given user click on Sign In button
        Then user should land in overview page

    @regression @positive
    Scenario: To verify stops tab
        Given user click on Stop link
        Then user should land in Stops page

    @regression @positive
    Scenario: To verify stops tab
        Given user click on Stop link
        And user click on Add New Stop button in Stops page
        Then user able to view Add New Stop page