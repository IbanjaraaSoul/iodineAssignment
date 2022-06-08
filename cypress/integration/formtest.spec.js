/// <reference types="cypress" />
describe("form", () => {
  it("is validated", () => {
    cy.visit("index.html");

    cy.get("#form-validation").within(() => {
      // at first both input elements are invalid
      cy.get("input:invalid").should("have.length", 2);
      cy.get("input:valid").should("have.length", 1);

      cy.log("**enter the item**");
      cy.get("#item").type("push pin");
      cy.get("input:invalid").should("have.length", 1);

      cy.log("**enter quantity**");
      cy.get("#quantity").type(3);
      cy.get("input:invalid").should("have.length", 0);
      // instead both items should be valid
      // plus the submit input button
      cy.get("input:valid").should("have.length", 3);
    });
  });
});
