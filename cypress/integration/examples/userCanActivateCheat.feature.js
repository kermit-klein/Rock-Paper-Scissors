describe("User can activate cheat", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("and see computer's next choice", () => {
    cy.get(".slider.round").click();
    cy.get("#cheathint").then((cheat) => {
      if (cheat.text().includes("Paper")) {
        cy.get("#scissors").click();
        cy.get(".result").should("contain", "Player");
      } else if (cheat.text().includes("Rock")) {
        cy.get("#paper").click();
        cy.get(".result").should("contain", "Player");
      } else {
        cy.get("#rock").click();
        cy.get(".result").should("contain", "Player");
      }
    });
  });
});
