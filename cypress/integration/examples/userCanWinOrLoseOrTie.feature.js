describe("User can win,lose or tie", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("User selects paper, loses/wins/ties", () => {
    cy.get("#paper").click();
    cy.get(".compselection").then((comp) => {
      if (comp.text().includes("PAPER")) {
        cy.get(".result").should("contain", "Tie");
      } else if (comp.text().includes("ROCK")) {
        cy.get(".result").should("contain", "Player");
      } else {
        cy.get(".result").should("contain", "Computer");
      }
    });
  });

  it("User selects rock, loses/wins/ties", () => {
    cy.get("#rock").click();
    cy.get(".compselection").then((comp) => {
      if (comp.text().includes("PAPER")) {
        cy.get(".result").should("contain", "Computer");
      } else if (comp.text().includes("ROCK")) {
        cy.get(".result").should("contain", "Tie");
      } else {
        cy.get(".result").should("contain", "Player");
      }
    });
  });

  it("User selects scissors, loses/wins/ties", () => {
    cy.get("#scissors").click();
    cy.get(".compselection").then((comp) => {
      if (comp.text().includes("PAPER")) {
        cy.get(".result").should("contain", "Player");
      } else if (comp.text().includes("ROCK")) {
        cy.get(".result").should("contain", "Computer");
      } else {
        cy.get(".result").should("contain", "Tie");
      }
    });
  });
});
