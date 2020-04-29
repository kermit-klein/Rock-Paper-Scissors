describe("User can enter his name", () => {
  it("and can see it on screen", function () {
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
});
