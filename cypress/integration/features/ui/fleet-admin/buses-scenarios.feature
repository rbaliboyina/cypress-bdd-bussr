Feature: Buses related test cases under fleet admin portal

    All Buses related test cases developed in this feature file

    Background: fleet-admin login page
        Given user navigates to login page
        Given user enter Email in email field
        Given user enter Password in password field
        Given user click on Sign In button
        Then user should land in overview page

    @regression @positive
    Scenario: verify buses tab
        Given user click on Buses link
        Then user should land in Buses page

    @regression @positive
    Scenario: To verify add new bus button
        Given user click on Buses link
        Then user should land in Buses page
        When user click on Add New Bus button in Buses page
        Then user should able to view Add New Bus page


    @regression @positive
    Scenario: To verify adding new bus
        Given user click on Buses link
        Then user should land in Buses page
        When user click on Add New Bus button in Buses page
        Then user should able to view Add New Bus page
        When user enter vehicle id in Add New Bus page
        And user enter seats in Add New Bus page
        And user enter color in Add New Bus page
        And user enter model in Add New Bus page
        And user enter year in Add New Bus page
        And user click on Save button in Add New Bus page
        Then user should able to view Bus Info page
        And user should able to view vehicleid in Bus Info page

    @regression @positive
    Scenario: To verify edit bus option
        Given user click on Buses link
        Then user should land in Buses page
        When user click on Edit button for first record
        Then user should able to view Bus Edit page

    @regression @positive
    Scenario:To verify info option
        Given user click on Buses link
        Then user should land in Buses page
        When user click on info button for first record
        Then user should able to view Bus Info page

    @regression @positive
    Scenario: To verify filter icon
        Given user click on Buses link
        Then user should land in Buses page
        When user click on Filter button in Buses page
        Then user able to view Filter option in Buses page

    @regression @positive
    Scenario: To verify filter with vehicle id option
        Given user click on Buses link
        Then user should land in Buses page
        When user click on Filter button in Buses page
        And user enter vehicleid in vehicleid filter
        And user click on Applychanges button on filter popup in Buses page
        Then vehicleid related information should display in Buses page

    @regression @positive
    Scenario: To verify filter with seats option
        Given user click on Buses link
        Then user should land in Buses page
        When user click on Filter button in Buses page
        And user enter seats in seats filter
        And user click on Applychanges button on filter popup in Buses page
        Then seats related information should display in Buses page

    @regression @positive
    Scenario: To verify filter with color option
        Given user click on Buses link
        Then user should land in Buses page
        When user click on Filter button in Buses page
        And user enter color in color filter
        And user click on Applychanges button on filter popup in Buses page
        Then color related information should display in Buses page

    @regression @positive
    Scenario: To verify filter with model option
        Given user click on Buses link
        Then user should land in Buses page
        When user click on Filter button in Buses page
        And user enter model in model filter
        And user click on Applychanges button on filter popup in Buses page
        Then model related information should display in Buses page

    @regression @positive
    Scenario: To verify filter with year option
        Given user click on Buses link
        Then user should land in Buses page
        When user click on Filter button in Buses page
        And user enter year in year filter
        And user click on Applychanges button on filter popup in Buses page
        Then year related information should display in Buses page
        
    @regression @positive
    Scenario: To verify with clear filter option
        Given user click on Buses link
        Then user should land in Buses page
        When user click on Filter button in Buses page
        And user enter vehicleid in vehicleid filter
        And user enter seats in seats filter
        And user enter year in year filter
        And user click on clearfilter option in filters
        Then all the fields in filter should be cleared