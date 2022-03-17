Feature: Cities related test cases under fleet admin portal

    All Cities related test cases developed in this feature file

    Background: fleet-admin login page
        Given user navigates to login page
        Given user enter Email in email field
        Given user enter Password in password field
        Given user click on Sign In button
        Then user should land in overview page

    @regression @positive
    Scenario: To Verify Cities Tab
        Given user click on Cities link
        Then user should able to view cities page

    @regression @positive
    Scenario: To Verify Add New City Button
        Given user click on Cities link
        And click on Add New City button in cities page
        Then user should able to view Add New City page

    @regression @positive
    Scenario Outline: To verify adding new city
        Given user click on Cities link
        And click on Add New City button in cities page
        When user enter <cityname> in cityname filed in Add New City page
        And user selects timezone in Add New City page
        And user click on Save button in Add New City page
        Then user should able to view City Info page
        Examples:
            | cityname   |
            | Banagalore |

    @regression @positive
    Scenario: To verify edit option
        Given user click on Cities link
        Then user should able to view cities page
        When user click on Edit button for first record in Cities page
        Then user should able to view Cities Edit page

    @regression @positive
    Scenario: To verify info option
        Given user click on Cities link
        Then user should able to view cities page
        When user click on City Info button for first record in Cities page
        Then user should able to view City Info page

    @regression @positive
    Scenario: To verify filter icon
        Given user click on Cities link
        Then user should able to view cities page
        When user click on Filter button in cities page
        Then user should able to view Filter popup in citie spage

    @regression @positive
    Scenario: To verify filter with city name option
        Given user click on Cities link
        Then user should able to view cities page
        When user click on Filter button in cities page
        And user type cityname in Filter popup in cities page
        And user click on ApplyChanges in Filter button in cities page
        Then user should able to view the filtered results in cities page

    @regression @positive
    Scenario: To verify clear filters option
        Given user click on Cities link
        Then user should able to view cities page
        When user click on Filter button in cities page
        And user type cityname in Filter popup in cities page
        And user click on ClearFilters in Filter button in cities page
        Then cityname filed in Filters should be empty in cities page