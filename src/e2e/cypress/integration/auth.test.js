describe('Teachers app', () => {
  it('Renders unauthenticated app', () => {
    cy.visit('http://localhost:3000/');
    cy.findByText(/login/i).should('exist');
  });
  it('Allows user to authenticated', () => {
    cy.visit('http://localhost:3000/');
    cy.findByText(/login/i).should('exist');
    cy.findByText(/login/i).click().type('teacher@gmail.com');
    cy.findByText(/password/i).should('exist');
    cy.findByText(/password/i)
      .click()
      .type('1234');
    cy.findByText(/Sign in/i).click();
    cy.findByText(/Logged as/i).should('exist');
  });
});
