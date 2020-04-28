describe("User can see correct page content", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("User can see header", () => {
    cy.get("#header").should("contain", "THE ULTIMATE ROCK, PAPER, SCISSORS");
  });

  it("User can see game menu buttons", () => {
    cy.get("#nwply").should("contain", "Change Player");
    cy.get("#rgame").should("contain", "Reset Game");
    cy.get("#vscore").should("contain", "View Score");
  });

  it("User see selection buttons", () => {
    cy.get("#rock").should("contain", "ROCK");
    cy.get("#paper").should("contain", "PAPER");
    cy.get("#scissors").should("contain", "SCISSORS");
  });

  it("User see scoreboard", () => {
    cy.get("#currentscore").should("contain", "0-0-0");
  });

  it("User see selection text of his", () => {
    cy.get(".playerselection").should("contain", "???");
  });

  it("User see selection text of computer", () => {
    cy.get(".compselection").should("contain", "???");
  });

  it("User can't see result", () => {
    cy.get(".result").should("not.exist");
  });

  it("User can see cheat switch", () => {
    cy.get(".slider").should("exist");
  });

  it("User can't see cheat hint", () => {
    cy.get("#cheathint").should("not.exist");
  });
});
