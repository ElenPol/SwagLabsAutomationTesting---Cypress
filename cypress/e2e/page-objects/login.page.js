/// <reference types="cypress" />

class LoginPage{

    visit(){
        cy.visit('https://www.saucedemo.com/')
    }

    getUsernameTextfield(){
        return cy.get('input[name=user-name')
    }

    getPasswordTextfield(){
        return cy.get('input[name=password')
    }

    getLoginButton(){
        return cy.get('input[type=submit]')
    }

    getErrorMessage(){
        return cy.get('[data-test="error"]')
    }
}

export default new LoginPage()