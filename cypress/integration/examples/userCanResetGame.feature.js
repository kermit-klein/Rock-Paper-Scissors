describe("User can reset the score", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("after playing 3 games in a row", () => {
    cy.get("#paper").click();
    cy.get("#rock").click();
    cy.get("#paper").click();
    cy.get("#rgame").click();
    cy.get("#currentscore").contains("0-0-0");
  });
});
