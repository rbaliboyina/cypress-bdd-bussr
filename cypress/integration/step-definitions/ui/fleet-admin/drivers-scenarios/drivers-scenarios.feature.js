///<reference types="Cypress" />

import { expect } from "chai";
import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import driverspage from "../../../../../page-object-model/fleet-admin/driverspage";
import addDriversPage from '../../../../../page-object-model/fleet-admin/addDriverPage'
import addNewUserPage from "../../../../../page-object-model/fleet-admin/addNewUserPage";
import loginPage from '../../../../../page-object-model/fleet-admin/loginpage'
import overviewPage from '../../../../../page-object-model/fleet-admin/overviewpage'
import usermanagementpage from "../../../../../page-object-model/fleet-admin/usermanagementpage";
import userinfopage from '../../../../../page-object-model/fleet-admin/userInfopage'

const configData = require('../../../../../fixtures/config.json');
const loginData = require('../../../../../fixtures/fleet_adminapp_data/operator_login.json');

Given(/^user click on Drivers link$/, () => {
    overviewPage.clickdrivers();
})

Then(/^user should able to view Drivers page$/, () => {
    driverspage.getDriversText().should('eq', "Drivers");
})

Then(/^user should able to view all the fields related to Drivers page$/, () => {
    driverspage.getDriversText().should('eq', "Drivers");
    driverspage.isAddNewDriverButtonVisible();
    driverspage.isDownloadIconVisible();
    driverspage.isFilterIconVisible();
    driverspage.getDriverNameHeaderText().should('eq', "Driver Name");
    driverspage.getEmailHeaderText().should('eq', "E-mail");
    driverspage.getPhoneNumberHeaderText().should('eq', "Phone Number");
    driverspage.getLicenseNumberHeaderText().should('eq', "License No");
    driverspage.getLicenseExpireHeaderText().should('eq', "License Expire");
    driverspage.getDriverStatusHeaderText().should('eq', "Driver Status");
})

And(/^user click on Add New Driver link$/, () => {
    driverspage.clickAddNewDriverButton();
})

Then(/^user should able to view Add New Driver page$/, () => {
    addDriversPage.getDriverBreadCrumbText().should('eq', 'Add New Driver');
})

Then(/^user should able to view all the fields related to New Driver page$/, () => {
    addDriversPage.isDownloadButtonVisible();
    addDriversPage.isDriverNameTextBoxVisible();
    addDriversPage.isDriverStatusButtonsVisible();
    addDriversPage.isEmailTextBoxVisible();
    addDriversPage.isAuthPasswordTextBoxVisible();
    addDriversPage.isPhoneTextBoxVisible();
    addDriversPage.isLicenseNoTextBoxVisible();
    addDriversPage.isLicenseExpiryTextBoxVisible();
    addDriversPage.isPhotoTextBoxVisible();
    addDriversPage.isSaveButtonVisible();
})