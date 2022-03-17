/// <reference types="Cypress"/>

import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import stopspage from "../../../../../page-object-model/fleet-admin/stopspage";
import addNewStopPage from "../../../../../page-object-model/fleet-admin/addNewStopPage";
import overviewpage from "../../../../../page-object-model/fleet-admin/overviewpage";

Given(/^user click on Stop link$/, () => {
    overviewpage.clickstops();
})

Then(/^user should land in Stops page$/, () => {
    stopspage.getStopsBreadCrumbText().should('eq', 'Stops');
    stopspage.isStopsHeaderVisible();
    stopspage.isAddNewStopButtonVisible();
})

And(/^user click on Add New Stop button in Stops page$/, () => {
    stopspage.clickOnAddNewStopButton();
})

Then(/^user able to view Add New Stop page$/, ()=>{
    addNewStopPage.getAddNewStopBreadCrumb().should('eq', 'Add New Stop');
    addNewStopPage.isAddNewStopHeaderVisible();
    addNewStopPage.isDownloadIconVisible();
})