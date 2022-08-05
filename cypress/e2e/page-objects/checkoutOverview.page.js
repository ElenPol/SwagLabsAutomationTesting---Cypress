/// <reference types="cypress" />

class CheckoutOverviewPage{

    getCartItems(){
        return cy.get('.cart_item')
    }

    getTotalPrice(){
        return cy.get('#checkout_summary_container > div > div.summary_info > div.summary_total_label')
    }

    getCancelButton(){
        return cy.get('[data-test="cancel"]')
    }
    
    getFinishButton(){
        return cy.get('[data-test="finish"]')
    }
}

export default new CheckoutOverviewPage()