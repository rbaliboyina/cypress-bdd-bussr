///<reference types="Cypress" />
import Utilities from '../../utilities/Utilities';

class addNewUser {
    elements = {
        addNewUserLabel: () => cy.get('h1.action-header__HeaderTitle-q7dhgh-3'),
        downloadButton: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a>svg'),
        emailAddress: () => cy.get('#email'),
        authPassword: () => cy.get('#password'),
        accessLevel: () => cy.get('div.css-g1d714-ValueContainer'),
        userName: () => cy.get('#userName'),
        mobileNumber: () => cy.get('#mobileNumber'),
        operatorId: () => cy.get('#operatorId'),
        saveButton: () => cy.get('button.is-primary > span'),
        errormessages: () => cy.get('div.help.is-danger'),
        backbutton: () => cy.get('i.icomoon-pagination-left'),
    }

    fillAddNewUserForm(accesslevel) {
        var email = Utilities.generateEmail();
        this.typeEmailAddress(email)
        this.typeAuthPassword(Utilities.generatePassword())
        this.typeAccessLevel(accesslevel);
        this.typeUserName(Utilities.generateName());
        this.typeMobileNumber(Utilities.generatePhoneNumber());
        this.typeOperatorID(Utilities.generateOperatorId());
        return email;
    }

    typeEmailAddress(email) {
        this.elements.emailAddress().type(email);
    }

    typeAuthPassword(pwd) {
        this.elements.authPassword().type(pwd);
    }

    typeAccessLevel(accesslevel) {
        this.elements.accessLevel().type(accesslevel).type('{enter}', { multiple: true });
    }

    typeUserName(data) {
        this.elements.userName().type(data);
    }

    typeMobileNumber(data) {
        this.elements.mobileNumber().type(data);
    }

    typeOperatorID(data) {
        this.elements.operatorId().type(data);
    }

    clickBackButton() {
        this.elements.backbutton().click();
    }

    addNewUserTittleVisible() {
        this.elements.addNewUserLabel().should('be.visible');
    }

    isDownloadButtonVisible() {
        this.elements.downloadButton().should('be.visible');
    }

    isEmailAddressVisible() {
        this.elements.emailAddress().should('be.visible');
    }

    isAuthPasswordVisible() {
        this.elements.authPassword().should('be.visible');
    }

    isAccessLevelVisible() {
        this.elements.accessLevel().should('be.visible');
    }

    isUserNameVisible() {
        this.elements.userName().should('be.visible');
    }

    isMobileNumberVisible() {
        this.elements.mobileNumber().should('be.visible');
    }

    isOperatorIdVisible() {
        this.elements.operatorId().should('be.visible');
    }

    isSaveButtonVisible() {
        this.elements.saveButton().should('be.visible')
    }

    clickSaveButton() {
        this.elements.saveButton().click();
    }

    errorMessageCount(count) {
        this.elements.errormessages().should('have.length', count)
    }

    errorMessageIsDispalyed(errormsg) {
        cy.contains(errormsg).should('be.visible');
    }
}
module.exports = new addNewUser();