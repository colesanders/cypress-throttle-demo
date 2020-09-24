import {
  toggleMenu,
  getMenuItem,
  getPageData,
  addFillerPages,
  navToThrottle,
  checkIfDone,
} from 'cypress/support/click-test.po';

describe('Throttle Test, Adds 10 Filler Pages for Weight', () => {
  beforeEach(() => {
    cy.safeVisit('/');

    toggleMenu();
    getMenuItem(2).wait(500).ionClick();
    getPageData().should('be.visible');

    addFillerPages(10);

    navToThrottle();
  });

  it(`Standard Timeout`, () => {
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

  it.only(`Timeout for 12 seconds`, () => {
    checkIfDone(12000);
  });
});
