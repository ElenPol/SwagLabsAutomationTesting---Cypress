/// <reference types="cypress" />

import CartPage from '../page-objects/cart.page'
import CheckoutPage from '../page-objects/checkout.page'
import CheckoutCompletedPage from '../page-objects/checkoutCompleted.page'
import CheckoutOverviewPage from '../page-objects/checkoutOverview.page'
import HomePage from '../page-objects/home.page'

describe('Cart Test Suite', function(){
    beforeEach(function(){
        cy.login('standard_user', 'secret_sauce')
    })

    afterEach(function(){
        cy.logout()
    })

    it.only('Verify Number at Cart Icon', function(){
        HomePage.getInventoryItem4Button().click()
        HomePage.getShoppingCartNumber().should('be.visible').and('have.text', '1')
        HomePage.getInventoryItem4RemoveButton().click()
        HomePage.getShoppingCart().children().should('have.length', 1);
    })

    it('Add to Cart Item - Verify Product Info - Go Back', function(){
        HomePage.getInventoryItem4Button().click()
        HomePage.getShoppingCart().click()
        cy.location('pathname').should('eq', '/cart.html')
        CartPage.getInventoryItem4Name().should('be.visible').and('have.text', 'Sauce Labs Backpack')
        CartPage.getInventoryItem4Description().should('be.visible')
            .and('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
        CartPage.getInventoryItem4Price().should('be.visible').and('have.text', '$29.99')
        CartPage.getContinueShopping().click()
        cy.location('pathname').should('eq', '/inventory.html')
        HomePage.getInventoryItem0().should('be.visible')
        HomePage.getInventoryItem1().should('be.visible')
        HomePage.getInventoryItem2().should('be.visible')
        HomePage.getInventoryItem3().should('be.visible')
        HomePage.getInventoryItem4().should('be.visible')
        HomePage.getInventoryItem5().should('be.visible')
    })
    
    it('Verify 2 Items in Cart - Remove 1 - Verify 1', function(){ 
        HomePage.getInventoryItem4Button().click()
        HomePage.getInventoryItem1Button().click()
        HomePage.getShoppingCart().click()
        cy.location('pathname').should('eq', '/cart.html')
        CartPage.getCartItems().should('have.length', 2)
        CartPage.getInventoryItem4RemoveButton().click()
        CartPage.getCartItems().should('have.length', 1)
    })

    it('Checkout - Verify Form - Cancel', function(){
        HomePage.getInventoryItem4Button().click()
        HomePage.getShoppingCart().click()
        cy.location('pathname').should('eq', '/cart.html')
        CartPage.getCheckoutButton().click()
        cy.location('pathname').should('eq', '/checkout-step-one.html')
        CheckoutPage.getFirstNameTextfield().should('be.visible')
        CheckoutPage.getLastNameTextfield().should('be.visible')
        CheckoutPage.getPostalCodeTextfield().should('be.visible')
        CheckoutPage.getCancelButton().click()
        cy.location('pathname').should('eq', '/cart.html')
    })

    it('Checkout - Fill the Form and Continue - Verify the Item List - Cancel', function(){
        HomePage.getInventoryItem4Button().click()
        HomePage.getShoppingCart().click()
        cy.location('pathname').should('eq', '/cart.html')
        CartPage.getCheckoutButton().click()
        cy.location('pathname').should('eq', '/checkout-step-one.html')
        CheckoutPage.getFirstNameTextfield().type('Eleni')
        CheckoutPage.getLastNameTextfield().type('Papadopoulou')
        CheckoutPage.getPostalCodeTextfield().type('61100')
        CheckoutPage.getContinueButton().click()
        cy.location('pathname').should('eq', '/checkout-step-two.html')
        CheckoutOverviewPage.getCartItems().should('be.visible').and('have.length', 1)
        CheckoutOverviewPage.getTotalPrice().should('be.visible')
        CheckoutOverviewPage.getCancelButton().click()
        cy.location('pathname').should('eq', '/inventory.html')
    })

    it('Verify Message of Successful Order', function(){
        HomePage.getInventoryItem4Button().click()
        HomePage.getShoppingCart().click()
        cy.location('pathname').should('eq', '/cart.html')
        CartPage.getCheckoutButton().click()
        cy.location('pathname').should('eq', '/checkout-step-one.html')
        CheckoutPage.getFirstNameTextfield().type('Eleni')
        CheckoutPage.getLastNameTextfield().type('Papadopoulou')
        CheckoutPage.getPostalCodeTextfield().type('61100')
        CheckoutPage.getContinueButton().click()
        cy.location('pathname').should('eq', '/checkout-step-two.html')
        CheckoutOverviewPage.getFinishButton().click()
        cy.location('pathname').should('eq', '/checkout-complete.html')
        CheckoutCompletedPage.getHeader().should('be.visible').and('have.text', 'THANK YOU FOR YOUR ORDER')
        CheckoutCompletedPage.getText().should('be.visible')
                    .and('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })

    it('Add Item to Cart and Go to Cart - Go Back - Add Another Item and Go to Cart - Remove a Product, Verify 1 and Checkout - Verify Textfields and Cancel - Verify Return to Cart Page and Checkout - Fill Info and Continue - Cancel and Verify Return to HomePage Page - Go to Cart and Checkout - Fill Info and Continue - Finish - Verify Message of Successful Order', function(){ 
        // Add Item to Cart and Go to Cart
        HomePage.getInventoryItem4Button().click()
        HomePage.getShoppingCart().click()
        cy.location('pathname').should('eq', '/cart.html')

        // Go Back
        CartPage.getContinueShopping().click()
        cy.location('pathname').should('eq', '/inventory.html')

        // Add Another Item and Go to Cart
        HomePage.getInventoryItem1Button().click()
        HomePage.getShoppingCart().click()

        // Remove a Product, Verify 1 and Checkout
        CartPage.getInventoryItem4RemoveButton().click()
        CartPage.getCartItems().should('have.length', 1)
        CartPage.getCheckoutButton().click()
        cy.location('pathname').should('eq', '/checkout-step-one.html')

        // Verify Textfields and Cancel
        CheckoutPage.getFirstNameTextfield().should('be.visible')
        CheckoutPage.getLastNameTextfield().should('be.visible')
        CheckoutPage.getPostalCodeTextfield().should('be.visible')
        CheckoutPage.getCancelButton().click()

        // Verify Return to Cart Page and Checkout
        cy.location('pathname').should('eq', '/cart.html')
        CartPage.getCheckoutButton().click()
        cy.location('pathname').should('eq', '/checkout-step-one.html')

        // Fill Info and Continue
        CheckoutPage.getFirstNameTextfield().type('Eleni')
        CheckoutPage.getLastNameTextfield().type('Papadopoulou')
        CheckoutPage.getPostalCodeTextfield().type('61100')
        CheckoutPage.getContinueButton().click()
        cy.location('pathname').should('eq', '/checkout-step-two.html')

        // Cancel and Verify Return to HomePage
        CheckoutOverviewPage.getCancelButton().click()
        cy.location('pathname').should('eq', '/inventory.html')

        // Go to Cart and Checkout
        HomePage.getShoppingCart().click()
        CartPage.getCheckoutButton().click()

        // Fill Info and Continue
        CheckoutPage.getFirstNameTextfield().type('Eleni')
        CheckoutPage.getLastNameTextfield().type('Papadopoulou')
        CheckoutPage.getPostalCodeTextfield().type('61100')
        CheckoutPage.getContinueButton().click()

        // Finish
        CheckoutOverviewPage.getFinishButton().click()

        // Verify Message of Successful Order
        CheckoutCompletedPage.getHeader().should('be.visible').and('have.text', 'THANK YOU FOR YOUR ORDER')
        CheckoutCompletedPage.getText().should('be.visible')
                    .and('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!')
    })
})