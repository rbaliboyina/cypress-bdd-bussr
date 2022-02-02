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
        usermanagementlabel: () => cy.get('h1.action-header__HeaderTitle-q7dhgh-3')
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