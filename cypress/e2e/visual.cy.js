describe('Visual Regression Tests', () => {
  it('should match the design of the Main page', () => {
    cy.visit('/');
    // wait for page to fully load
    cy.wait(1000);
    cy.compareSnapshot('main-page');
  });
});
