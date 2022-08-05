/// <reference types="cypress" />

class HomePage{

    getBurgerMenu(){
        return cy.get('#react-burger-menu-btn')
    }

    getLogoutLink(){
        return cy.get('#logout_sidebar_link')
    }

    getInventoryItem0(){
        return cy.get('#item_0_title_link')
    }

    getInventoryItem1(){
        return cy.get('#item_1_title_link')
    }
    getInventoryItem1Button(){
        return cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }
    
    getInventoryItem2(){
        return cy.get('#item_2_title_link')
    }
    
    getInventoryItem3(){
        return cy.get('#item_3_title_link')
    }

    getInventoryItem4(){
        return cy.get('#item_4_title_link')
    }
    getInventoryItem4Button(){
        return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
    }
    getInventoryItem4RemoveButton(){
        return cy.get('[data-test="remove-sauce-labs-backpack"]')
    }

    getInventoryItem5(){
        return cy.get('#item_5_title_link')
    }

    getBackToProductsButton(){
        return cy.get('#back-to-products')
    }

    getSortOptionsDropdown(){
        return cy.get('[data-test="product_sort_container"]')
    }

    getShoppingCart(){
        return cy.get('#shopping_cart_container > a')
    }
    getShoppingCartNumber(){
        return cy.get('#shopping_cart_container > a > span')
    }

    getDropDown(){
        return cy.get('#header_container > div.header_secondary_container > div.right_component > span')
    }
}

export default new HomePage()