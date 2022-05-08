Feature: stops related test cases under fleet admin portal

    All stop related test cases developed in this feature file

    # Background: fleet-admin login page
    #     Given user navigates to login page
    #     Given user enter Email in email field
    #     Given user enter Password in password field
    #     Given user click on Sign In button
    #     Then user should land in overview page

    # @regression @positive
    # Scenario: To verify stops tab
    #     Given user click on Stop link
    #     Then user should land in Stops page

    # @regression @positive
    # Scenario: To verify Add New Stop page
    #     Given user click on Stop link
    #     And user click on Add New Stop button in Stops page
    #     Then user able to view Add New Stop page

    # @regression @positive
    # Scenario Outline: To verify adding new stop
    #     Given user click on Stop link
    #     And user click on Add New Stop button in Stops page
    #     Then user able to view Add New Stop page
    #     When user enter <stopname> in stopname field in Add New Stop page
    #     And user enter <cityname> in cityname field in Add New Stop page
    #     And user click on <status> radio button field in Add New Stop page
    #     And user enter <stops> in stops field in Add New Stop page
    #     And user enter <landmark> in landmark field in Add New Stop page
    #     And user enter <citycode> in citycode field in Add New Stop page
    #     And user click on Save button in Add New Stop page
    #     Then user able to view StopInfo page

    #     Examples:
    #         | stopname          | status | stops                                       | cityname  | landmark                 | citycode |
    #         | krishnaraja puram | Active | Krishnarajapura Bengaluru, Karnataka, India | Bangalore | KR PURAM Railway station | BNG      |
    #         | BHEL              | Active | BHEL, Hyderabad, Telangana, India           | Hyderabad | BHEL Signals             | HYD      |

    # @regression @positive
    # Scenario: To verify Edit button
    #     Given user click on Stop link
    #     Then user should land in Stops page
    #     When user click on Edit button on first record in Stops page
    #     Then user able to view Edit page for stop record


    # @regression @positive
    # Scenario: To verify Stop Info button
    #     Given user click on Stop link
    #     Then user should land in Stops page
    #     When user click on Stop Info button on first record in Stops page
    #     Then user able to view StopInfo page

    # @regression @positive
    # Scenario: To verify Filter
    #     Given user click on Stop link
    #     Then user should land in Stops page
    #     When user click on Filter button in Stops page
    #     Then user able to view Filter options in Stops page

    # @regression @positive
    # Scenario: To verify filter with stop name option
    #     Given user click on Stop link
    #     Then user should land in Stops page
    #     When user click on Filter button in Stops page
    #     And user enter stopname in stopname filter
    #     And user click on Applychanges button on filter popup in Stops page
    #     Then stopname related information should display in Stops page

    # @regression @positive
    # Scenario: To verify filter with city name option
    #     Given user click on Stop link
    #     Then user should land in Stops page
    #     When user click on Filter button in Stops page
    #     And user enter city name in city name filter
    #     And user click on Applychanges button on filter popup in Stops page
    #     Then city name related information should display in Stops page

    # @regression @positive
    # Scenario: To verify filter with Address option
    #     Given user click on Stop link
    #     Then user should land in Stops page
    #     When user click on Filter button in Stops page
    #     And user enter Address in Address filter
    #     And user click on Applychanges button on filter popup in Stops page
    #     Then Address related information should display in Stops page


    # @regression @positive
    # Scenario: To verify filter with Clear-Filter option
    #     Given user click on Stop link
    #     Then user should land in Stops page
    #     When user click on Filter button in Stops page
    #     And user enter the data in different filter options in Stops page
    #     And user click on Clear Filter button on filter popup in Stops page
    #     Then Filter popup should be clear all the entered data on filter popup