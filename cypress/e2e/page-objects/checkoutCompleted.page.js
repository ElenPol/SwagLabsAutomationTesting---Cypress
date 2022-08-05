/// <reference types="cypress" />

class CheckoutCompletedPage{

    getHeader(){
        return cy.get('#checkout_complete_container > h2')
    }

    getText(){
        return cy.get('#checkout_complete_container > div')
    }
    
}

export default new CheckoutCompletedPage()