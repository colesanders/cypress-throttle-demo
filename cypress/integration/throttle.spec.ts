import {
  toggleMenu,
  getMenuItem,
  getPageData,
  addFillerPages,
  navToThrottle,
  checkIfDone,
} from 'cypress/support/click-test.po';

describe('Throttle Test With Filler Pages for Weight', () => {
  beforeEach(() => {
    cy.safeVisit('/');

    toggleMenu();
    getMenuItem(2).wait(500).ionClick();
    getPageData().should('be.visible');
  });

  describe('10 Filler Pages', () => {
    beforeEach(() => {
      addFillerPages(10);
      navToThrottle();
    });

    it.only(`Standard Timeout`, () => {
      checkIfDone();
    });

    it(`Timeout for 6 seconds`, () => {
      checkIfDone(6000);
    });

    it(`Timeout for 8 seconds`, () => {
      checkIfDone(8000);
    });

    it(`Timeout for 10 seconds`, () => {
      checkIfDone(10000);
    });
  });

  describe('20 Filler Pages', () => {
    beforeEach(() => {
      addFillerPages(20);
      navToThrottle();
    });

    it(`Standard Timeout`, () => {
      checkIfDone();
    });

    it(`Timeout for 10 seconds`, () => {
      checkIfDone(20000);
    });

    it(`Timeout for 20 seconds`, () => {
      checkIfDone(20000);
    });
  });
});
