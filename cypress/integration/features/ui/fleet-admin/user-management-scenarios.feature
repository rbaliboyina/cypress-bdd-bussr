Feature: User management related test cases under fleet admin portal

    All user management related test cases developed in this feature file

    Background: fleet-admin login page
        Given user navigates to login page
        Given user enter Email in email field
        Given user enter Password in password field
        Given user click on Sign In button
        Then user should land in overview page


    # @regression @positive
    # Scenario: View User Administration
    #     Given user should able to view User Administration

    # @regression @positive
    # Scenario: elements under User Administration
    #     Given user should able to view User Management under User Administration
    #     Given user should able to view Drivers under User Administration

    # @regression @positive
    # Scenario: Validate user management
    #     Given user click on User Management
    #     Then user able to view respective login details in User Management page

    # @regression @positive
    # Scenario: Validate Add New User button
    #     Given user click on User Management
    #     And user click on Add New User button
    #     Then user should navigate to Add New User Page

    # @regression @positive
    # Scenario: View elements in Add New User Page
    #     Given user click on User Management
    #     And user click on Add New User button
    #     Then user should able to view Add New User heading with back icon
    #     And user should able to view Download icon
    #     And user is able to view Email Address input field
    #     And user is able to view Authorization Password input field
    #     And user is able to view Access Level input field
    #     And user is able to view User Name input field
    #     And user is able to view Mobile Number input field
    #     And user is able to view Operator ID input field
    #     And user is able to view Save button


    # @regression @negative
    # Scenario: validate save button - without data
    #     Given user click on User Management
    #     And user click on Add New User button
    #     Then user should able to view Add New User heading with back icon
    #     And user click on Save button without entering the data
    #     Then user able to get '3' mandatory messages
    #     Then user able to view 'Email is required'
    #     Then user able to view 'Password is required'
    #     Then user able to view 'Access level is required'

    @regression @positive
    Scenario: Validate back button in Add New User page
        Given user click on User Management
        And user click on Add New User button
        Then user should able to view Add New User heading with back icon
        And user click on back button
        Then user should navigate to User management page



