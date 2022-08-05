/// <reference types="cypress" />

class CartPage{

    getInventoryItem4Name(){
        return cy.get('#item_4_title_link > div')
    }

    getInventoryItem4Description(){
        return cy.get('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.inventory_item_desc')
    }

    getInventoryItem4Price(){
        return cy.get('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div')
    }

    getInventoryItem4RemoveButton(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }

    getContinueShopping(){
        return cy.get('[data-test="continue-shopping"]')
    }

    // getCartList(){
    //     return cy.get('#cart_contents_container > div > div.cart_list')
    // }
    getCartItems(){
        return cy.get('.cart_item')
    }

    getCheckoutButton(){
        return cy.get('[data-test="checkout"]')
    }
}

export default new CartPage()