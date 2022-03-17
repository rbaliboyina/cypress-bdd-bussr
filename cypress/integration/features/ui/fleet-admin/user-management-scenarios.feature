Feature: User management related test cases under fleet admin portal

    All user management related test cases developed in this feature file

    Background: fleet-admin login page
        Given user navigates to login page
        Given user enter Email in email field
        Given user enter Password in password field
        Given user click on Sign In button
        Then user should land in overview page

    @regression @positive
    Scenario: View User Administration
        Given user should able to view User Administration

    @regression @positive
    Scenario: Validate Add New User button
        Given user click on User Management
        And user click on Add New User button
        Then user should navigate to Add New User Page

    @regression @positive
    Scenario: View elements in Add New User Page
        Given user click on User Management
        And user click on Add New User button
        Then user should able to view Add New User heading with back icon
        And user is able to view Email Address input field
        And user is able to view Authorization Password input field
        And user is able to view Access Level input field
        And user is able to view User Name input field
        And user is able to view Mobile Number input field
        And user is able to view Active check box field
        And user is able to view License Expiry Date field
        And user is able to view License Number field
        And user is able to view Save button


    @regression @positive
    Scenario: Validate back button in Add New User page
        Given user click on User Management
        And user click on Add New User button
        Then user should able to view Add New User heading with back icon
        And user click on back button
        Then user should navigate to User management page

    @regression @positive
    Scenario Outline: Validate Save button - with valid data
        Given user click on User Management
        And user click on Add New User button
        Then user should able to view Add New User heading with back icon
        When user fill the New User Form with random data and acess level as <accesslevel>
        And user click on save button
        Then user should able to view given email address in User Info page
        And user should able to view Edit button
        When user click on back button in User Info page
        Then user should navigate to User management page
        And saved user should be displayed
        Examples:
            | accesslevel |
            | Fleet Admin |
            | Driver      |
            | Agent       |

@regression @positive
Scenario: view elements in the user info page
    Given user click on User Management
    And user click on User Information link by clicking on ...
    Then user navigates to User Information page
    And user should able to view Edit button
    And user able to view Email, Access Level, Mobile Number, isActive, Craeted At and Updated At fields

@regression @positive
Scenario: Validate Edit button in User Info page
    Given user click on User Management
    And user click on User Information link by clicking on ...
    Then user navigates to User Information page
    And user click on Edit button in User Information page
    And user should able to view User Information button
    And user should able to view Save button
    And all the fields should be in Edit mode

@regression @positive
Scenario: Validate Back button in User Info page
    Given user click on User Management
    And user click on User Information link by clicking on ...
    Then user navigates to User Information page
    And user click on back button
    Then user should navigate to User management page


@regression @positive
Scenario: Validate Filters Panel hamburger icon
    Given user click on User Management
    And user click on Filter Panel hamburger icon
    Then user should able to view Filter popup


