describe("User can see score count", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("User selects paper", () => {
    cy.get("#paper").click();
    cy.get("#currentscore").contains(/[1||0]-[0||1]-[0||1]/);
    cy.get("#paper").click();
    cy.get("#currentscore").contains(/[1||0||2]-[0||1||2]-[0||1||2]/);
  });

  it("User selects rock", () => {
    cy.get("#rock").click();
    cy.get("#currentscore").contains(/[1||0]-[0||1]-[0||1]/);
    cy.get("#rock").click();
    cy.get("#currentscore").contains(/[1||0||2]-[0||1||2]-[0||1||2]/);
  });

  it("User selects scissors", () => {
    cy.get("#scissors").click();
    cy.get("#currentscore").contains(/[1||0]-[0||1]-[0||1]/);
    cy.get("#scissors").click();
    cy.get("#currentscore").contains(/[1||0||2]-[0||1||2]-[0||1||2]/);
  });
});
