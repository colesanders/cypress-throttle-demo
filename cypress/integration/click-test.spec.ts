import { toggleMenu, getMenuItem, getPageData } from 'cypress/support/click-test.po';

xdescribe('These Tests Should Route to the Page and Show the Data', () => {
  describe('Almost never pass', () => {
    it(`Clicks too fast and fails,
      Button is there visually but not functionally`, () => {
      cy.visit('/');

      toggleMenu();

      getMenuItem(0).click();

      getPageData().should('be.visible');
    });

    it(`Clicks too fast and fails,
      Button is first checked for tag`, () => {
      cy.visit('/');

      toggleMenu();

      getMenuItem(0).should('have.class', 'ion-activatable').click();

      getPageData().should('be.visible');
    });

    it(`Clicks too fast and fails,
      Test waits statically`, () => {
      cy.visit('/');

      toggleMenu();

      getMenuItem(0).wait(200).click();

      getPageData().should('be.visible');
    });

    it(`Clicks too fast and fails,
      Test waits for page load`, () => {
      cy.safeVisit('/');

      toggleMenu();

      getMenuItem(0).click();

      getPageData().should('be.visible');
    });

    it(`Clicks too fast and fails,
      Test uses different click`, () => {
      cy.visit('/');

      toggleMenu();

      getMenuItem(0).trigger('mousedown').trigger('mouseup');

      getPageData().should('be.visible');
    });
  });

  describe('Passes, but only sometimes', () => {
    it(`Clicks slowly and passes`, () => {
      cy.visit('/');

      toggleMenu();

      getMenuItem(0).trigger('mousedown').trigger('mouseup').click();

      getPageData().should('be.visible');
    });

    it(`Test uses different click`, () => {
      cy.visit('/');

      toggleMenu();

      getMenuItem(0).ionClick();

      getPageData().should('be.visible');
    });

    it(`Clicks very slowly and passes`, () => {
      cy.visit('/');

      toggleMenu();

      getMenuItem(0).wait(500).click();

      getPageData().should('be.visible');
    });
  });

  describe('Passes Always', () => {
    it(`Clicks slowly and
      Test uses different click`, () => {
      cy.visit('/');

      toggleMenu();

      getMenuItem(0).wait(500).ionClick();

      getPageData().should('be.visible');
    });
  });
});
