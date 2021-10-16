/// <reference types="cypress" />

var Chance = require('chance');
var chance = new Chance()

describe('Cadastro', () => {
    it('Quando informar os dados necessários e salvar, então o cadastro será concludido.', () => {
        cy.visit('http://automationpractice.com/index.php')

        cy.get('a.login').click()

        let email = chance.email()
        cy.get('input[name=email_create]').type(email)
        cy.get('i.icon-user').click()

        cy.get('input[name=id_gender][value="2"]').check()
        
        cy.get('input[name=customer_firstname]').type(chance.first())
        cy.get('input[name=customer_lastname]').type(chance.last())
        cy.get('input[name=email]').should('have.value',email)
        cy.get('input[name=passwd]').type(chance.string(), {sensitive: true})
        cy.get('select[name=days]').select('17')
        cy.get('select[name=months]').select(chance.month())
        cy.get('select[name=years]').select(chance.year({min: 1900, max: 2021}))

        cy.get('input[name=company]').type(chance.company())
        cy.get('input[name=address1]').type(chance.address())
        // cy.get('input[name=address2]').type()
        cy.get('input[name=city]').type(chance.city())
        cy.get('select[name=id_state]').select(chance.state({ full: true }))
        cy.get('input[name=postcode]').type(chance.zip())
        cy.get('input[name=phone_mobile]').type(chance.phone())
        cy.get('input[name=alias]').type(chance.address())
        cy.get('button[name=submitAccount]').click()

        cy.url().should('contain', 'my-account')

    });
});