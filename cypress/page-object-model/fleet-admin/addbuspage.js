///<reference types="Cypress"/>
import 'cypress-wait-until';
import Utilities from '../../utilities/Utilities';
const configData = require('../../fixtures/config.json');

class buspage {
    elements = {
        addnewbus: () => cy.get('#app > section > section > div > section:first-of-type > section:first-of-type > div > a:first-of-type > div'),
        vehicleid: () => cy.get('input#plate'),
        seats: () => cy.get('input#availableSeats'),
        photo: () => cy.get('input#photo'),
        color: () => cy.get('input#color'),
        model: () => cy.get('input#model'),
        year: () => cy.get('input#year'),
        licenseexpiry: () => cy.get('input#licenseExpiryDate'),
        nextmontharrow:()=> cy.get('div[class*="open"]>div[class="flatpickr-months"]>span[class*="flatpickr-next-month"]'),
        save: () => cy.get('button[type="submit"]'),
        vehicleidlabel:()=> cy.get('div.showInfoView-inner>div:first-of-type>p')
    }

    

    clickaddnewbus() {
        cy.waitUntil(() => this.elements.addnewbus().should('be.visible'),{
            errorMsg:'Bus page is still loading... not able to view the add new bus button',
            timeout:configData.timeout,
            interval:configData.intervaltimeout
        });

        this.elements.addnewbus().click();
    }

    inputvehicleid(id) {
        cy.waitUntil(()=> this.elements.vehicleid().should('be.visible'),{
            errorMsg:'Bus form is still loading.... not able to view the vehicle id input field',
            timeout:configData.timeout,
            interval:configData.intervaltimeout
        });

        this.elements.vehicleid().type(id);
    }

    inputseats(numberofseats) {
        this.elements.seats().type(numberofseats);
    }

    inputphoto(photolink) {
        this.elements.photo().type(photolink);
    }

    inputcolor(colorcode) {
        this.elements.color().type(colorcode);
    }

    inputmodel(modelnumber) {
        this.elements.model().type(modelnumber);
    }

    inputyear(value) {
        this.elements.year().type(value);
    }

    clicksave() {
        this.elements.save().click();

        cy.waitUntil(() => this.elements.vehicleidlabel().should('be.visible'),{
            errorMsg:'Bus saving form is still saving... not able to view the vehicleid label',
            timeout:configData.timeout,
            interval:configData.intervaltimeout
        });
    }


    //add bus form filling
    fillAddBusForm(addBusData){
        this.inputvehicleid(Utilities.generateVehicleId());
        this.inputseats(addBusData.numberofseats);
        this.inputphoto(addBusData.photolink);
        this.inputcolor(addBusData.color);
        this.inputmodel(addBusData.modelnumber);
        this.inputyear(addBusData.year);
        this.clicksave();
        }
}
module.exports = new buspage();