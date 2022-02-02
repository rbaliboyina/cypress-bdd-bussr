///<reference types="Cypress" />

import 'cypress-wait-until';
import Utilities from '../../utilities/Utilities';
const configData = require('../../fixtures/config.json');


class addDriverPage {
    elements = {
        addNewDriver: () => cy.get('#app > section > section > div > section:first-of-type > section:first-of-type > div > a:first-of-type > div'),
        driverName: () => cy.get('#name'),
        drivernamelabel:()=> cy.get('div.schedule__info>div:first-of-type>div.schedule__fields:first-of-type>p:last-of-type'),
        registeredRadioButton: () => cy.get('#registered'),
        inactiveRadioButton: () => cy.get('#inactive'),
        activeRadioButton: () => cy.get('#active'),
        email: () => cy.get('#email'),
        authPassword: () => cy.xpath('//input[@id="auth.password"]'),
        phone: () => cy.get('#phone'),
        licenseno: () => cy.get('#licenceNo'),
        licenseExpiry: () => cy.get('#licenseDate'),
        photo: () => cy.get('#photo'),
        save: () => cy.get('.btn-text')
    }

    clickSave(){
        this.elements.save().click();

        cy.waitUntil(() => this.elements.drivernamelabel().should('be.visible'),{
            errorMsg:'Driver form is still saving.... not able to view the driver name label',
            timeout:configData.timeout,
            interval:configData.intervaltimeout
        });
    }
    
    typeLicenseNo(value){
        this.elements.licenseno().type(value);
    }

    typePhone(value){
        this.elements.phone().type(value);
    }

    typeAuthPassword(value){
        this.elements.authPassword().type(value);
    }

    typeEmail(value){
        this.elements.email().type(value);
    }

    clickAddNewDriver() {
        cy.waitUntil(() => this.elements.addNewDriver().should('be.visible'),{
            errorMsg:'Driver Form page is still loading... not able to view the new driver button to click',
            timeout:configData.timeout,
            interval:configData.intervaltimeout
        });

       this.elements.addNewDriver().click();
    }

    typeDriverName(value) {
        cy.waitUntil(() => this.elements.driverName().should('be.visible'),{
            errorMsg:'Driver Form page is still loading... not able to view the drivername field to enter data',
            timeout:configData.timeout,
            interval:configData.intervaltimeout
        });
        this.elements.driverName().type(value);
    }

    clickRadioButton(value) {
        if ("registered" == value)
            this.elements.registeredRadioButton().click();
        else if  ("active" == value)
            this.elements.activeRadioButton().click();
        else if("inactive" == value)
            this.elements.inactiveRadioButton().click();
    }

    fillAddDriverForm(drivertype){
        this.typeDriverName(Utilities.generateName());
        this.clickRadioButton(drivertype);
        this.typeEmail(Utilities.generateEmail());
        this.typeAuthPassword(Utilities.generatePassword());
        this.typePhone(Utilities.generatePhoneNumber());
        this.clickSave();
    }
}
module.exports = new addDriverPage();