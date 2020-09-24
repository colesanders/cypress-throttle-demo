export const toggleMenu = () => cy.get('[data-cy=menu-toggle]').click();

export const getMenuItem = (index: number) => cy.get('[data-cy=menu-item]').eq(index);

export const getPageData = () => cy.get('[data-cy=page-data]');

export const checkIfDone = (timeout: number = 4000) =>
  getPageData().last({ timeout }).should('contain.text', 'Done!');

export const addFillerPages = (amount: number) => {
  for (let i = 0; i < amount; i++) {
    cy.get('[data-cy=add-filler-page]').last().should('have.class', 'ion-activatable').click();
  }
};

export const navToThrottle = () =>
  cy.get('[data-cy=throttle]').last().should('have.class', 'ion-activatable').click();
