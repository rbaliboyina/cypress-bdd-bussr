Feature: Routes related test cases under fleet admin portal

    All Routes related test cases developed in this feature file

    Background: fleet-admin login page
        Given user navigates to login page
        Given user enter Email in email field
        Given user enter Password in password field
        Given user click on Sign In button
        Then user should land in overview page

    @regression @positive
    Scenario: verify routes tab
        Given user click on Routes link
        Then user should land in Routes page

    @regression @positive
    Scenario: verify add new route tab
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Add New Route button in Routes page
        Then user should able to view Add New Route page

    @regression @positive
    Scenario Outline: verify add new route tab
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Add New Route button in Routes page
        And user enter <route_name> in Route Name field in Add New Route page
        And user click on <status> in Add New Route page
        And user set the Booking close time as <Booking_Close_Time_Hrs> <Booking_Close_Time_Mins> in Add New Route page
        And user set the <Price_Format> <Price_Value> in Add New Route page
        And user click on Add Stop button in Add New Route page for adding Stops
        And user set <Time_From_Start_In_Mins_1> <Bus_Stop_1> <Pause_Time_1> for Stop1 in Add New Route page
        And user click on Add Stop button in Add New Route page for adding Stops
        And user set <Time_From_Start_In_Mins_2> <Bus_Stop_2> <Pause_Time_2> for Stop2 in Add New Route page
        And user click on Save Button in Add New Route page for saving stop
        Then user able to view Route Info page

        Examples:
            | route_name          | status | Booking_Close_Time_Hrs | Booking_Close_Time_Mins | Price_Format | Price_Value | Time_From_Start_In_Mins_1 | Bus_Stop_1        | Pause_Time_1 | Time_From_Start_In_Mins_2 | Bus_Stop_2 | Pause_Time_2 |
            | Bangalore-Hyderabad | Active | 9                      | 0 Miute                 | INR          | 850         | 0                         | krishnaraja puram | 15           | 15                        | BHEL       | 15           |


    @regression @positive
    Scenario: verify add new route tab
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Edit button for first record of route in Routes page
        Then user able to view Route Edit page

    @regression @positive
    Scenario: verify add new route tab
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Route Info button for first record of route in Routes page
        Then user able to view Route Info page

    @regression @positive
    Scenario: To verify filter option
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Filter icon in Routes page
        Then Filter options should display in Routes page

    @regression @positive
    Scenario: To verify filter with route name option
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Filter icon in Routes page
        And user enter Route Name in Filter popup in Routes page
        And user click on Apply Changes in Filter popup in Routes page
        Then Route Name related information should display in Routes page

    @regression @positive
    Scenario: To verify filter with starting point option
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Filter icon in Routes page
        And user enter Starting Point in Filter popup in Routes page
        And user click on Apply Changes in Filter popup in Routes page
        Then Starting Point related information should display in Routes page

    @regression @positive
    Scenario: To verify filter with Ending point option
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Filter icon in Routes page
        And user enter Ending Point in Filter popup in Routes page
        And user click on Apply Changes in Filter popup in Routes page
        Then Ending Point related information should display in Routes page

    @regression @positive
    Scenario: To verify filter with Status option
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Filter icon in Routes page
        And user enter Status in Filter popup in Routes page
        And user click on Apply Changes in Filter popup in Routes page
        Then Status related information should display in Routes page

    @regression @positive
    Scenario: To verify filter with Status option
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Filter icon in Routes page
        And user enter Route Name in Filter popup in Routes page
        And user enter Starting Point in Filter popup in Routes page
        And user enter Ending Point in Filter popup in Routes page
        And user click on Clear Filter popup in Routes page
        Then all the fields on Popup should be empty in Routes page

    @regression @positive
    Scenario: To verify add stop button
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Add New Route button in Routes page
        And user click on Add Stop button in Add New Route page for adding Stops
        Then user can able to view the stop related fields in Add New Route page

    @regression @positive
    Scenario: To verify delete stop button
        Given user click on Routes link
        Then user should land in Routes page
        When user click on Add New Route button in Routes page
        And user click on Add Stop button in Add New Route page for adding Stops
        Then user can able to view the stop related fields in Add New Route page
        When user click on Remove stop button in Add New Route page for removing stop
        Then user should not able to view the stop related fields in Add New Route page