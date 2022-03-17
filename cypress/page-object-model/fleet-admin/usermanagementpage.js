///<reference types="Cypress" />

const configData = require('../../fixtures/config.json');

class usermanagement {
    elements = {
        emailFirstRow: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:nth-of-type(1)>td:nth-of-type(1)>a', { timeout: configData.timeout }),
        accesslevelFirstRow: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:nth-of-type(1)>td:nth-of-type(2)>p'),
        createdAtFirstRow: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:nth-of-type(1)>td:nth-of-type(3)>p'),
        updatedAtFirstRow: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:nth-of-type(1)>td:nth-of-type(4)>p'),
        moreInfoAtFirstRow: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:nth-of-type(1)>td:nth-of-type(5)'),
        addNewUserButton: () => cy.get('a.is-primary>div.btn-text:nth-of-type(1)'),
        downloadButton: () => cy.get('a.bordered-btn>svg'),
        filterButton: () => cy.get('div.action-header__HeaderButtons-q7dhgh-4>a:nth-of-type(3)'),
        usermanagementlabel: () => cy.get('li.is-active>a.breadcrumbs__BreadcrumbLink-l5j25e-1.fMNXZO:nth-of-type(1)'),
        moreinfoFirstRow: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:nth-of-type(1) > td > div.is-right.is-hoverable.dropdown'),
        userInfo: () => cy.get('table.table__Table-elf6l1-0>tbody>tr:nth-of-type(1) > td > div.is-right.is-hoverable.dropdown > div > div.dropdown-content > a:first-of-type> div:first-of-type'),
        filterIcon: () => cy.get('a.styled-button__StyledButton-u8dm3f-0.button.fhLnZT>span.icon'),
        filterEmail: () => cy.get('input[name=filter-email]'),
        filterApplyChanges: () => cy.get('form > button.is-primary'),
        firstRowEmailID: () => cy.get('table.table__Table-elf6l1-0 > tbody>tr:first-of-type>td:first-of-type'),
        userInfoButtonInEdit:()=> cy.get('div.action-header__HeaderButtons-q7dhgh-4>a.button.is-primary')
    }

    getFirstRowEmailID() {
        return this.elements.firstRowEmailID().invoke('text');
    }

    clickFilterApplyChanges() {
        this.elements.filterApplyChanges().focus().click();
    }

    typeFilterEmail(emaildata) {
        this.elements.filterEmail().type(emaildata);
    }

    isFilterEmailVisible() {
        this.elements.filterEmail().should('be.visible');
    }

    clickFilterIcon() {
        this.elements.filterIcon().click();
    }

    userInfoIsVisible() {
        this.elements.userInfoButtonInEdit().should('be.visible');
    }

    clickUserInfo() {
        this.elements.moreinfoFirstRow().trigger('onmouseover')
        this.elements.userInfo().click({ force: true })
    }

    getUserManagementLabel() {
        return this.elements.usermanagementlabel().invoke('text');
    }

    getEmailAddress() {
        return this.elements.emailFirstRow().invoke('text');
    }

    getAccessLevel() {
        return this.elements.accesslevelFirstRow().invoke('text');
    }

    getCreatedAt() {
        return this.elements.createdAtFirstRow().invoke('text');
    }

    getUpdatedAt() {
        return this.elements.updatedAtFirstRow().invoke('text');
    }

    clickAddNewUserButton() {
        this.elements.addNewUserButton().click();
    }
}
module.exports = new usermanagement();