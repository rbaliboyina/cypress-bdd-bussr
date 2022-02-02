///<reference types="Cypress" />

import 'cypress-wait-until';
const configData = require('../../fixtures/config.json');

class addCitiesPage {
    elements = {
        addNewCity: () => cy.get('#app > section > section > div > section:first-of-type > section:first-of-type > div > a:first-of-type > div'),
        cityName: () => cy.get('#name'),
        timeZone: () => cy.get('#app > section > section > div > section > section:nth-of-type(2) > form > div:nth-of-type(2) > div > div > div > div:first-of-type > div:first-of-type'),
        timeZoneInput: () => cy.get('input[id*=react-select]'),
        timeZoneFirstEle: () => cy.get('#app > section > section > div > section > section:nth-of-type(2) > form > div:nth-of-type(2) > div > div > div + div'),
        save: () => cy.get('#app > section > section > div > section > section:nth-of-type(2) > form > button > span'),
        citynamelable:()=> cy.get('div.cityInfo__fields:first-of-type>p:first-of-type')
    }

    clickAddNewCity() {
        cy.waitUntil(()=> this.elements.addNewCity().should('be.visible'),{
            errorMsg:'Cities page is still loading.. not able to view the add new city button',
            timeout:configData.timeout,
            intervaltimeout:configData.intervaltimeout
        });
        
        this.elements.addNewCity().click();
    }

    typeCityName(value) {
        cy.waitUntil(()=> this.elements.cityName().should('be.visible'),{
            errorMsg:'Cities form is still loading.. not able to view the cityname',
            timeout:configData.timeout,
            intervaltimeout:configData.intervaltimeout
        });
        
        this.elements.cityName().type(value);
    }

    clickTimeZone() {
        this.elements.timeZone().click();
    }

    selectTimeZone(value) {
        this.elements.timeZoneInput().type(value).wait(configData.intervaltimeout).type('{enter}');
    }

    clickSave() {
        this.elements.save().click();

        cy.waitUntil(()=> this.elements.citynamelable().should('be.visible'),{
            errorMsg:'Saving cities form is still loading.. not able to view the cityname label',
            timeout:configData.timeout,
            intervaltimeout:configData.intervaltimeout
        });
    }

    fillAddCitiesForm(addCitiesData) {
        this.typeCityName(addCitiesData.cityname);
        // this.clickTimeZone();
        this.selectTimeZone(addCitiesData.timezone);
        this.clickSave();
    }
}
module.exports = new addCitiesPage();