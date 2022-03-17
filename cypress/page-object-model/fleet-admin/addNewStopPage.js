/// <reference types="Cypress"/>

class addnewstoppage {
    elements = {
        addnewstopbreadcrumb: () => cy.get('.is-active'),
        addnewstopheader: () => cy.get('h1.action-header__HeaderTitle-q7dhgh-3'),
        downloadIcon: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a>svg'),
        stopname: () => cy.get('#name'),
        disabledStatus: () => cy.get('#Disabled'),
        activeStatus: () => cy.get('#Active'),
        stopssearch: () => cy.get('#search'),
        area: () => cy.get('#area'),
        cityname: () => cy.get('div.css-b8ldur-Input'),
        address: () => cy.get('#address'),
        landmark: () => cy.get('#hint'),
        cityCode: () => cy.get('#cityCode'),
        terminalCode: () => cy.get('#terminalCode'),
        saveButton: () => cy.get('button.is-primary')
    }

    getAddNewStopBreadCrumb() {
        return this.elements.addnewstopbreadcrumb().invoke('text');
    }

    isAddNewStopHeaderVisible() {
        this.elements.addnewstopheader().should('be.visible');
    }

    isDownloadIconVisible() {
        this.elements.downloadIcon().should('be.visible');
    }
}
module.exports = new addnewstoppage();