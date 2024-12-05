describe("Verify radio buttons via webdriveruni", () => {
  before(() => {
    cy.visit("https://www.webdriveruniversity.com/");
    cy.get("#dropdown-checkboxes-radiobuttons")
      .invoke("removeAttr", "target")
      .click({ force: true });
  });
  it("Check specific radio buttons", () => {
    cy.get("#radio-buttons").find("[type='radio']").first().check();
    cy.get("#radio-buttons").find("[type='radio']").eq(1).check();
  });

  it("validate the states of specific radio buttons", () => {
    cy.get("[value='lettuce']").should("not.be.checked");
    cy.get("[value='cabbage']").should("be.disabled");
    cy.get("[value='pumpkin']").should("be.checked");
  });
});
