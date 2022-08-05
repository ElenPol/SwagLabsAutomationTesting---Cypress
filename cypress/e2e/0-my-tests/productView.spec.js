/// <reference types="cypress" />

import HomePage from '../page-objects/home.page'
import ProductViewPage from '../page-objects/productView.page'

describe('Product View Test Suite', function(){
    beforeEach(function(){
        cy.login('standard_user', 'secret_sauce')
    })

    afterEach(function(){
        cy.logout()
    })

    it('Correct Info of Product View - successfully go back', function(){
        HomePage.getInventoryItem4().click()
        cy.location('pathname').should('eq', '/inventory-item.html')
        ProductViewPage.getItemDescription().should('be.visible').and('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        ProductViewPage.getItemPrice().should('be.visible').and('have.text', '$29.99')
        ProductViewPage.getAddToCartButton().should('be.visible').and('have.text', 'Add to cart')
        ProductViewPage.getBackToProductsButton().click()
        cy.location('pathname').should('eq', '/inventory.html')
        HomePage.getInventoryItem0().should('be.visible')
        HomePage.getInventoryItem1().should('be.visible')
        HomePage.getInventoryItem2().should('be.visible')
        HomePage.getInventoryItem3().should('be.visible')
        HomePage.getInventoryItem4().should('be.visible')
        HomePage.getInventoryItem5().should('be.visible')   
    })
    
    
}) 