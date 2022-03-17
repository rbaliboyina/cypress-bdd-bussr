/// <reference types="Cypress"/>

class stopspage {
    elements = {
        stopsbreadcrumb: () => cy.get('li.is-active>a'),
        stopsheader: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > h1'),
        addnewstopbutton: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:first-of-type'),
        downloadIcon: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(2)'),
        filterIcon: () => cy.get('section.action-header__HeaderWrapper-q7dhgh-0 > div > a:nth-of-type(3)'),
    }

    getStopsBreadCrumbText() {
        return this.elements.stopsbreadcrumb().invoke('text');
    }

    isStopsHeaderVisible() {
        this.elements.stopsheader().should('be.visible');
    }

    isAddNewStopButtonVisible() {
        this.elements.addnewstopbutton().should('be.visible');
    }

    clickOnAddNewStopButton() {
        this.elements.addnewstopbutton().click();
    }
}
module.exports = new stopspage();