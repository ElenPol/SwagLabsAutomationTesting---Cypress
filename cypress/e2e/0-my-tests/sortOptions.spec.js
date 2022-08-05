/// <reference types="cypress" />

import HomePage from '../page-objects/home.page'

describe('Sort Options (dropdown) Test Suite', function(){
    beforeEach(function(){
        cy.login('standard_user', 'secret_sauce')
    })

    afterEach(function(){
        cy.logout()
    })

    it('Correct Info of Product View - successfully go back', function(){
        //home.getSortOptionsDropdown().select(0).should('be.visible').and('have.value', 'az')//.should('have.text', 'Name (A to Z)')     
        HomePage.getSortOptionsDropdown().children().eq(0).should('have.value', 'az').and('have.text', 'Name (A to Z)')
        HomePage.getSortOptionsDropdown().children().eq(1).should('have.value', 'za').and('have.text', 'Name (Z to A)')
        HomePage.getSortOptionsDropdown().children().eq(2).should('have.value', 'lohi').and('have.text', 'Price (low to high)')
        HomePage.getSortOptionsDropdown().children().eq(3).should('have.value', 'hilo').and('have.text', 'Price (high to low)')
    })


    
    
}) 