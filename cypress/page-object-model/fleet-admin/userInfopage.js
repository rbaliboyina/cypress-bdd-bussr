///<reference types="Cypress" />
const configData = require('../../fixtures/config.json');

class userinfopage {
    elements = {
        userinfolabel: () => cy.get('h1.action-header__HeaderTitle-q7dhgh-3.level-left.ihyYwQ'),
        editButton: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a.button.is-primary'),
        backarrow: () => cy.get('a.action-header__BackBtn-q7dhgh-2>i'),
        emailValue: () => cy.get('.schedule__left>div:nth-of-type(1)>p:nth-of-type(2)'),
        emailLabel: () => cy.get('.schedule__left>div:nth-of-type(1)>p:nth-of-type(1)'),
        accessLevelLabel: () => cy.get('.schedule__left>div:nth-of-type(2)>p:nth-of-type(1)'),
        accessLevelValue: () => cy.get('.schedule__left>div:nth-of-type(2)>p:nth-of-type(2)'),
        createdAtLabel: () => cy.get('.schedule__left>div:nth-of-type(3)>p:nth-of-type(1)'),
        createdAtValue: () => cy.get('.schedule__left>div:nth-of-type(3)>p:nth-of-type(2)'),
        authPasswordLabel: () => cy.get('.schedule__right>div:nth-of-type(1)>p:nth-of-type(1)'),
        authPasswordValue: () => cy.get('.schedule__right>div:nth-of-type(1)>p:nth-of-type(2)'),
        updatedAtLabel: () => cy.get('.schedule__right>div:nth-of-type(3)>p:nth-of-type(1)'),
        updatedAtValue: () => cy.get('.schedule__right>div:nth-of-type(3)>p:nth-of-type(1)')
        
    }

    updatedAtLabelIsVisible() {
        this.elements.updatedAtLabel().should('be.visible')
    }

    updatedAtValueIsNonEmpty() {
        this.elements.updatedAtValue().should('not.be.empty')
    }

    authPasswordLabelIsVisible() {
        this.elements.authPasswordLabel().should('be.visible')
    }

    authPasswordValueIsNonEmpty() {
        this.elements.authPasswordValue().should('not.be.empty')
    }

    createdAtLabelIsVisible() {
        this.elements.createdAtLabel().should('be.visible')
    }

    createdAtValueIsNonEmpty() {
        this.elements.createdAtValue().should('not.be.empty')
    }

    accessLevelLabelIsVisible() {
        this.elements.accessLevelLabel().should('be.visible')
    }

    accessLevelValueIsNonEmpty() {
        this.elements.accessLevelValue().should('not.be.empty')
    }

    eamilLabelIsVisible() {
        this.elements.emailLabel().should('be.visible');
    }

    emailValueIsNonEmpty() {
        this.elements.emailValue().should('not.be.empty');
    }

    isEmailMatching(email) {
        this.elements.emailValue().invoke('text').should('eq', email);
    }

    isEditButtonVisible() {
        this.elements.editButton().focus().should('be.visible');
    }

    clickEditButton() {
        this.elements.editButton().click();
    }

    clickBackArrowButton() {
        this.elements.backarrow().click();
    }

    getUserInfoLabel() {
        return this.elements.userinfolabel().invoke('text');
    }
}
module.exports = new userinfopage();