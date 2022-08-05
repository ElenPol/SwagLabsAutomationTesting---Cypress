/// <reference types="cypress" />

class CheckoutPage{

    getFirstNameTextfield(){
        return cy.get('[data-test="firstName"]')
    }

    getLastNameTextfield(){
        return cy.get('[data-test="lastName"]')
    }

    getPostalCodeTextfield(){
        return cy.get('[data-test="postalCode"]')
    }

    getCancelButton(){
        return cy.get('[data-test="cancel"]')
    }

    getContinueButton(){
        return cy.get('[data-test="continue"]')
    }
    
}

export default new CheckoutPage()