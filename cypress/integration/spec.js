describe("sample scenario", () => {
  it("sample test", () => {
    cy.visit("https://iodinesoftware.com/");
    cy.contains("Careers").should("not.be.visible");
    cy.get('#menu-item-4050 > [href="#"]').realHover("mouse");
    cy.contains("Careers")
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "https://iodinesoftware.com/careers-2/");
    cy.iframe("#gnewtonIframe")
      .find('a[ns-qa="Software Development Engineer in Test"]')
      .should("be.visible")
      .click();
    // adding wait as per : https://stackoverflow.com/questions/22194409/failed-to-execute-postmessage-on-domwindow-the-target-origin-provided-does
    cy.wait(1000);
    cy.iframe("#gnewtonIframe")
      .find("#gnewtonJobDescriptionBtn > div.gnewtonBlueBtn.gnewtonApplyBtn")
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.enter("#gnewtonIframe").then((getBody) => {
      getBody()
        .find("#y_8a7883a97c7b0baf017ca44b07f32134")
        .should("be.visible")
        .click();
      getBody()
        .find("#n_8a7883a97c7b0baf017ca44cda7d2224")
        .should("be.visible")
        .click();
      getBody().find('div[ns-qa="continueBtn"]').should("be.visible").click();
    });
    cy.wait(1000);
    cy.iframe("#gnewtonIframe")
      .find("#gnewton-submit")
      .should("be.visible")
      .click();
    cy.wait(1000);
    cy.enter("#gnewtonIframe").then((getBody) => {
      getBody().find("#male").should("be.visible").click();
      getBody().find("#race-8").should("be.visible").click();
      getBody().find("#gnewton-submit").should("be.visible").click();
    });
    cy.wait(1000);
    cy.enter("#gnewtonIframe").then((getBody) => {
      getBody().find("#not-identify").should("be.visible").click();
      getBody().find("#gnewton-submit").should("be.visible").click();
    });
    cy.wait(1000);
    cy.enter("#gnewtonIframe").then((getBody) => {
      getBody().find("#declined_disability").should("be.visible").click();
      getBody().find("#your-name").should("be.visible").type("Kumar Saheb");
      getBody().find("#today-date").should("be.visible").type("2022-06-06");
      getBody().find("#gnewton-submit").should("be.visible").click();
    });
    cy.wait(1000);
    cy.enter("#gnewtonIframe").then((getBody) => {
      getBody().find("#firstName").clear();
      getBody().find("#lastName").clear();
      getBody().find("#email").clear();
      getBody()
        .find("#firstName")
        .invoke("prop", "validationMessage")
        .should("equal", "Please fill out this field.");
      getBody()
        .find("#lastName")
        .invoke("prop", "validationMessage")
        .should("equal", "Please fill out this field.");
      getBody()
        .find("#email")
        .invoke("prop", "validationMessage")
        .should("equal", "Please fill out this field.");
      getBody()
        .find("#gnewtonForm")
        .within(() => {
          cy.get("input:invalid").should("have.length", 12);
        });
      getBody().find("#submitText").should("be.visible").click();
      getBody().find("#firstName").clear().type("Kumar");
      getBody()
        .find("#gnewtonForm")
        .within(() => {
          cy.get("input:invalid").should("have.length", 11);
        });
      getBody().find("#submitText").should("be.visible").click();
      getBody().find("#lastName").clear().type("Saheb");
      getBody()
        .find("#gnewtonForm")
        .within(() => {
          cy.get("input:invalid").should("have.length", 10);
        });
      getBody().find("#submitText").should("be.visible").click();
      getBody().find("#email").clear().type("ks2476@gmail.com");
      getBody()
        .find("#gnewtonForm")
        .within(() => {
          cy.get("input:invalid").should("have.length", 9);
        });
    });
  });
});
