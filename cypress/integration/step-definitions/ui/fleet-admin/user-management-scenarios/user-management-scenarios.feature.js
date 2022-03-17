///<reference types="Cypress" />

import { expect } from "chai";
import { When, Given, And, Then } from "cypress-cucumber-preprocessor/steps";
import addNewUserPage from "../../../../../page-object-model/fleet-admin/addNewUserPage";
import loginPage from '../../../../../page-object-model/fleet-admin/loginpage'
import overviewPage from '../../../../../page-object-model/fleet-admin/overviewpage'
import usermanagementpage from "../../../../../page-object-model/fleet-admin/usermanagementpage";
import userinfopage from '../../../../../page-object-model/fleet-admin/userInfopage'

const configData = require('../../../../../fixtures/config.json');
const loginData = require('../../../../../fixtures/fleet_adminapp_data/operator_login.json');

Given(/^user navigates to login page$/, () => {
  cy.visit(configData.fleet_login_url)
})

Given(/^user enter Email in email field$/, () => {
  loginPage.typeEmailAddress(loginData.email)
})

Given(/^user enter Password in password field$/, () => {
  loginPage.typePassword(loginData.password);
})

Given(/^user click on Sign In button$/, () => {
  loginPage.clickSignIn();
})

Then(/^user should land in overview page$/, () => {
  overviewPage.isOverviewLabelVisible();
})

Given(/^user should able to view User Administration$/, () => {
  overviewPage.isUserAdministrationVisible();
})

Given(/^user should able to view User Management under User Administration$/, () => {
  overviewPage.isUserManagementVisible();
})

Then(/^user should able to view Drivers under User Administration$/, () => {
  overviewPage.isDriversVisible();
});

describe('Validate user management', () => {
  Given(/^user click on User Management$/, () => {
    overviewPage.clickusermanagement();
    cy.waitUntil(() => usermanagementpage.elements.addNewUserButton().should('be.visible'));
  })

  Then(/^user able to view respective login details in User Management page$/, () => {
    cy.log('Logged in with ' + loginData.email);
    usermanagementpage.getEmailAddress().should('equal', loginData.email);

    expect(usermanagementpage.getAccessLevel()).not.to.be.null;
    expect(usermanagementpage.getAccessLevel()).not.to.be.empty;

    expect(usermanagementpage.getCreatedAt()).not.to.be.null;
    expect(usermanagementpage.getCreatedAt()).not.to.be.empty;

    expect(usermanagementpage.getUpdatedAt()).not.to.be.null;
    expect(usermanagementpage.getUpdatedAt()).not.to.be.empty;
  })

  And(/^user click on Add New User button$/, () => {
    usermanagementpage.clickAddNewUserButton();
  })

  Then(/^user should navigate to Add New User Page$/, () => {
    addNewUserPage.addNewUserTittleVisible();
  })

  Then(/^user should able to view Add New User heading with back icon$/, () => {
    addNewUserPage.addNewUserTittleVisible();
  })

  And(/^user should able to view Download icon$/, () => {
    addNewUserPage.isDownloadButtonVisible();
  })

  And(/^user is able to view Email Address input field$/, () => {
    addNewUserPage.isEmailAddressVisible();
  })

  And(/^user is able to view Authorization Password input field$/, () => {
    addNewUserPage.isAuthPasswordVisible();
  })

  And(/^user is able to view Access Level input field$/, () => {
    addNewUserPage.isAccessLevelVisible();
  })

  And(/^user is able to view User Name input field$/, () => {
    addNewUserPage.isUserNameVisible();
  })

  And(/^user is able to view Mobile Number input field$/, () => {
    addNewUserPage.isMobileNumberVisible();
  })

  And(/^user is able to view Operator ID input field$/, () => {
    addNewUserPage.isOperatorIdVisible();
  })

  And(/^user is able to view Save button$/, () => {
    addNewUserPage.isSaveButtonVisible();
  })

  And(/^user click on Save button without entering the data$/, () => {
    addNewUserPage.clickSaveButton();
  })

  Then(/^user able to get '(.*)' mandatory messages$/, (size) => {
    addNewUserPage.errorMessageCount(size)
  })

  Then(/^user able to view '(.*)'$/, (errormessage) => {
    addNewUserPage.errorMessageIsDispalyed(errormessage);
  })

  And(/^user click on back button$/, () => {
    addNewUserPage.clickBackButton();
  })

  Then(/^user should navigate to User management page$/, () => {
    usermanagementpage.getUserManagementLabel().should('eq', "User Management");
  })

})

describe('Validate Save button - with valid data', () => {
  var email = '';
  When(/^user fill the New User Form with random data and acess level as (.*)$/, (accessLevel) => {
    email = addNewUserPage.fillAddNewUserForm(accessLevel)
  })

  And(/^user click on save button$/, () => {
    addNewUserPage.clickSaveButton();
  })

  Then(/^user should able to view given email address in User Info page$/, () => {
    userinfopage.isEmailMatching(email);
  })

  And(/^user should able to view Edit button$/, () => {
    userinfopage.isEditButtonVisible();
  })

  When(/^user click on back button in User Info page$/, () => {
    userinfopage.clickBackArrowButton();
  })

  And(/^saved user should be displayed$/, () => {
    usermanagementpage.clickFilterIcon();
    usermanagementpage.typeFilterEmail(email);
    usermanagementpage.clickFilterApplyChanges();
    cy.wait(configData.actionstimeout)
    usermanagementpage.getFirstRowEmailID().should('eq', email);
  })
})

And(/^user click on User Information link by clicking on ...$/, () => {
  usermanagementpage.clickUserInfo();
})

Then(/^user navigates to User Information page$/, () => {
  userinfopage.getUserInfoLabel().should('eq', 'User Information');
})

And(/^user able to view Email, Access Level, Mobile Number, isActive, Craeted At and Updated At fields$/, () => {
  userinfopage.eamilLabelIsVisible();
  userinfopage.emailValueIsNonEmpty();
  userinfopage.accessLevelLabelIsVisible();
  userinfopage.accessLevelValueIsNonEmpty();
  userinfopage.mobileNumberLabelIsVisible();
  userinfopage.mobileNumberValueIsNonEmpty();
  userinfopage.isActiveLabelVisible();
  userinfopage.isActiveValueNonEmpty();
  userinfopage.createdAtLabelIsVisible();
  userinfopage.createdAtValueIsNonEmpty();
  userinfopage.updatedAtLabelIsVisible();
  userinfopage.updatedAtValueIsNonEmpty();
})

And(/^user click on Edit button in User Information page$/, () => {
  userinfopage.clickEditButton();
})

And(/^user should able to view User Information button$/, () => {
  usermanagementpage.userInfoIsVisible();
})

And(/^user should able to view Save button$/, () => {
  addNewUserPage.isSaveButtonVisible();
})

And(/^all the fields should be in Edit mode$/, () => {
  addNewUserPage.isEmailAddressVisible();
  addNewUserPage.isAuthPasswordVisible();
  addNewUserPage.isAccessLevelVisible();
  addNewUserPage.isUserNameVisible();
  addNewUserPage.isMobileNumberVisible();
})

And(/^user click on Filter Panel hamburger icon$/, () => {
  usermanagementpage.clickFilterIcon();
})

Then(/^user should able to view Filter popup$/, () => {
  usermanagementpage.isFilterEmailVisible();
})

And(/^user is able to view Active check box field$/, () => {
  addNewUserPage.isActiveCheckBoxVisible();
})

And(/^user is able to view License Expiry Date field$/, () => {
  addNewUserPage.isLicenseExpiryDateVisible();
})

And(/^user is able to view License Number field$/, () => {
  addNewUserPage.isLicenseNumberVisible();
})
