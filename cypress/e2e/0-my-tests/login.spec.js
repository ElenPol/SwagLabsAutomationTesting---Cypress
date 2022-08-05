/// <reference types="cypress" />

import LoginPage from '../page-objects/login.page'

describe('Login Test Suite', function(){
    it('Login Positive Test', function(){
        cy.login('standard_user', 'secret_sauce')
        cy.title().should('eq', 'Swag Labs')
        cy.location('protocol').should('eq', 'https:')
        cy.location('host').should('eq', 'www.saucedemo.com')
        cy.location('pathname').should('eq', '/inventory.html')
        cy.logout()
    })
    it('Login Negative Test - Incorrect username', function(){
        cy.login('user', 'secret_sauce')
        cy.location('href').should('eq', 'https://www.saucedemo.com/')
        LoginPage.getErrorMessage().should('be.visible').contains('Epic sadface: Username and password do not match any user in this service')
    })
    it('Login Negative Test - Incorrect password', function(){
        cy.login('standard_user', 'sauce')
        cy.location('href').should('eq', 'https://www.saucedemo.com/')
        LoginPage.getErrorMessage().should('be.visible').contains('Epic sadface: Username and password do not match any user in this service')
    })
}) 