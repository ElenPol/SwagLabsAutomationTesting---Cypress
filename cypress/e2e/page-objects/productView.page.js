/// <reference types="cypress" />

class ProductViewPage{

    getBackToProductsButton(){
        return cy.get('#back-to-products')
    }

    getItemDescription(){
        return cy.get('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_desc.large_size')
    }

    getItemPrice(){
        return cy.get('#inventory_item_container > div > div > div.inventory_details_desc_container > div.inventory_details_price')
    }

    getAddToCartButton(){
        return cy.get('#add-to-cart-sauce-labs-backpack')
    }
}

export default new ProductViewPage()