/// <reference types="cypress" />
// @ts-check
// cypress/support/e2e.js
import '@cypress/code-coverage/support';

describe('Test pages', () => {
  it('Visit nav links', () => {
    cy.visit('/');

    cy.get('.title').contains('Home');
    cy.get('.link').contains('About').click();
    cy.location('pathname').should('eq', '/about')

    cy.get('.main-title').contains('About us');

    cy.get('.link').contains('Form').click();
    cy.location('pathname').should('eq', '/form')
    cy.get('.main-title').contains('Form')

    cy.get('.link').contains('Home').click();
    cy.location('pathname').should('eq', '/')
    cy.get('.main-title').contains('Cats API')
  });
  it('Input Search', () => {
    cy.visit('/');
    cy.get('input[type="text"]').type('bengal');
    cy.get('.button-search').click();
    cy.get('input[type="text"]').should('have.value', 'bengal');
  });
  it('Form', () => {
    cy.visit('/form');
    cy.get('input[name="name"]').type('Yulia');
    cy.get('select').select('Russia');
    cy.get('input[type="date"]').type('2000-01-01');
    // cy.get('input[type=file]').selectFile('src/assets/test.png', { force: true });
    cy.get('input[type="radio"]').first().check();
    cy.get('input[type="checkbox"]').check();
    cy.get('button[type="submit"]').click();
  });
})