Feature: Drivers related test cases under fleet admin portal

    All Drivers related test cases developed in this feature file

    Background: fleet-admin login page
        Given user navigates to login page
        Given user enter Email in email field
        Given user enter Password in password field
        Given user click on Sign In button
        Then user should land in overview page

    @regression @positive
    Scenario: View Drivers
        Given user click on Drivers link
        Then user should able to view Drivers page

    @regression @positive
    Scenario:View the elements in the Drivers Page
        Given user click on Drivers link
        Then user should able to view all the fields related to Drivers page

    @regression @positive
    Scenario:Validate Add New Driver button
        Given user click on Drivers link
        And user click on Add New Driver link
        Then user should able to view Add New Driver page

    @regression @positive
    Scenario:View elements in the Add New Driver page
        Given user click on Drivers link
        And user click on Add New Driver link
        Then user should able to view Add New Driver page
        Then user should able to view all the fields related to New Driver page


    @regression @positive
    Scenario Outline: Validate Registered, active and inactive radio button with Save button- Without data
        Given user click on Drivers link
        And user click on Add New Driver link
        And user select Driver status as <radiobutton> radio button
        And user click on save button in Add New Driver page
        Then user should able to view 'Email is not valid' error message

        Examples:
            | radiobutton |
            | registered  |
            | inactive    |
            | active      |

    @regression @positive
    Scenario Outline: Validate Registered, active and inactive radio button with Save button- by entering the invalid data
        Given user click on Drivers link
        And user click on Add New Driver link
        And user select Driver status as <radiobutton> radio button
        And user enter <invalidemail> in email field in Add New Driver page
        And user click on save button in Add New Driver page
        Then user should able to view 'Email is not valid' error message

        Examples:
            | radiobutton | invalidemail |
            | registered  | @test.in     |
            | inactive    | @test.in     |
            | active      | @test.in     |

    @regression @positive
    Scenario: Validate Back button in Add New Driver page
        Given user click on Drivers link
        And user click on Add New Driver link
        Then user should able to view Add New Driver page
        And user click on back button in Add New Driver page
        Then user should able to view Drivers page

    @regression @positive
    Scenario: Validate Filters Panel hamburger icon in Drivers page
        Given user click on Drivers link
        And user click on Filter Panel hamburger icon in Drivers page
        Then user should able to view 'Filter' popup in Drivers page

    @regression @positive
    Scenario: Validate Back button in Filter panels in Drivers page
        Given user click on Drivers link
        And user click on Filter Panel hamburger icon in Drivers page
        Then user should able to view 'Filter' popup in Drivers page
        When user click on right arrow button on Filter popup
        Then applychanges button should not be visible in Drivers page
        And user should able to view Drivers page

    @registered @positive
    Scenario Outline: Create the Driver in Drivers page
        Given user click on Drivers link
        And user click on Add New Driver link
        When user enter Driver Name in Driver Name field in Add New Driver page
        When user selects <DriverStatus> in Add New Driver page
        When user enter Driver Email in email field in Add New Driver page for creating the new driver
        When user enter authpassword in password field in Add New Driver page
        When user enter phone number in phone number field in Add New Driver page
        And click on Save button in Add New Driver page
        Then user should land in Driver Info page
        When user click on back button in Driver Info page
        Then user should able to view created driver in Driver page
        Examples:
            | DriverStatus |
            | registered   |
            | active       |
            | inactive     |

    @regression @positive
    Scenario: validate driver info
        Given user click on Drivers link
        And user click on name of the first driver in drivers page
        Then user should land in Driver Info page

    @regression @positive
    Scenario: view elements in the Driver Info page
        Given user click on Drivers link
        And user click on name of the first driver in drivers page
        Then user should land in Driver Info page
        And user should able to view 'DRIVER NAME, E-MAIL, PHONE, LICENSE NO., LICENSE EXPIRE, DRIVER STATUS' as Headers in Driver Info page
        And user should not view any of the values empty in Drivers Info Page

    @regression @positive
    Scenario: Validate clear filters buttton
        Given user click on Drivers link
        And user click on Filter Panel hamburger icon in Drivers page
        Then user should able to view 'Filter' popup in Drivers page
        When user enter Driver Name, E-Mail, PhoneNumber in Filter popup in Drivers page
        And user click on Clear Filters in Filter popup in Drivers page
        Then Driver Name, E-Mail, PhoneNumber fields should be empty