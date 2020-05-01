describe("User can save and view games", () => {
  const todaysDate = Cypress.moment().format("YYYY-M-D");
  it("User enters and sees name", function () {
    cy.visit("http://localhost:3000", {
      onBeforeLoad(win) {
        cy.stub(win, "prompt").returns("Ali");
      },
    });
    cy.get("#nwply")
      .click()
      .then(() => {
        cy.get("#playername").should("contain", "Ali's Selection");
      });
  });

  it("User plays game and saves it", () => {
    cy.get("#paper").click();
    cy.get("#sresult")
      .click()
      .should(() => {
        expect(localStorage.getItem("scoreData")).to.not.be.null;
      });
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Score saved!");
    });
    cy.get("#vscore").click();
    cy.get("table").contains(/[1||0]-[0||1]-[0||1]/);
    cy.get("table").contains("Ali");
    cy.get("table").contains(todaysDate);
  });
});
