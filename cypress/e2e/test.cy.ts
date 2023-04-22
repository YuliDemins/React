import { ceil } from "cypress/types/lodash";

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
  // it('open catModal', () => {
  //   cy.visit('/');
  //   cy.get('input[type="text"]').type('abbysnian');
  //   cy.get('.button-search').click();
  //   cy.get('.card').click();
  //   cy.get('.catmodal-overlay').contains('.catmodal-info');
  // });
  it('Form', () => {
    cy.visit('/form');
    cy.get('input[name="name"]').type('Yulia');
    cy.get('select').select('Russia');
    cy.get('input[type="date"]').type('2000-01-01')
  });
})