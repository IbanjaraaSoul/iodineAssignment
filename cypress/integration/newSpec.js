import * as commonData from "../fixtures/data/commonData.json";
import * as e2eData from "../fixtures/data/sampleE2EDataSet.json";
import pages from "../support/page_objects/page.object.index";
const dayjs = require("dayjs");
const todaysDate = dayjs().format("YYYY-DD-MM");
describe("Validate that user shouldn't be allowed to enter blank first name,last name and email ", () => {
  it("user is in home page of IodineSoftwar & starts applying to {string} under career section", () => {
    cy.visit(commonData.appurl);
    cy.contains(e2eData.dataSet1.companyOptionToSelect).should(
      "not.be.visible"
    );
    pages.homepo.link_company().realHover("mouse");
    cy.contains(e2eData.dataSet1.companyOptionToSelect)
      .should("be.visible")
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", commonData.careerURL);
    pages.careerPO
      .link_opening("Software Development Engineer in Test")
      .should("be.visible")
      .click();
    cy.wait(1000);
    pages.jobDescriptionPO.button_apply().should("be.visible").click();
    cy.wait(1000);
    pages.basicQuesPO
      .checkBox_usaAuthorised()
      .should("have.text", e2eData.dataSet1.legallyAuthorisedInUS)
      .click();
    pages.basicQuesPO
      .checkBox_futureSponsership()
      .should("have.text", e2eData.dataSet1.spnonsershipRequired)
      .click();
    pages.basicQuesPO.button_continue().should("be.visible").click();
    cy.wait(1000);
    pages.disclaimerPO.button_continue().should("be.visible").click();
    cy.wait(1000);
    pages.genderRacePO
      .radiobutton_gender()
      .should("have.text", e2eData.dataSet1.gender)
      .click();
    pages.genderRacePO
      .radiobutton_race()
      .should("have.text", e2eData.dataSet1.ethnicityOrRace)
      .click();
    pages.disclaimerPO.button_continue().should("be.visible").click();
    cy.wait(1000);
  });
  it("user reaches the final page of the application workflow", () => {
    pages.vetranPO
      .radiobutton_vetran()
      .should("have.text", e2eData.dataSet1.vetranStatus)
      .click();
    pages.disclaimerPO.button_continue().should("be.visible").click();
    cy.wait(1000);
    pages.disabilityPO
      .radiobutton_disability()
      .should("have.text", e2eData.dataSet1.disabilityStatus)
      .click();
    pages.disabilityPO
      .inputBox_yourName()
      .should("be.visible")
      .type(e2eData.dataSet1.YourName);
    pages.disabilityPO.inputBox_date().should("be.visible").type(todaysDate);
    pages.disclaimerPO.button_continue().should("be.visible").click();
    cy.wait(1000);
    pages.summaryPO.label_submissionHelp().should(($el) => {
      expect($el).to.contain(e2eData.dataSet1.submitHelpText);
    });
  });
  it("error is thrown if user tries to submit blank first name ,last name & email", () => {
    pages.summaryPO.inputBox_firstName().clear();
    pages.summaryPO.inputBox_lastName().clear();
    pages.summaryPO.inputBox_email().clear();
    pages.summaryPO
      .inputBox_firstName()
      .invoke("prop", "validationMessage")
      .should("equal", commonData.errorMsgForBlankInput);
    pages.summaryPO
      .inputBox_lastName()
      .invoke("prop", "validationMessage")
      .should("equal", commonData.errorMsgForBlankInput);
    pages.summaryPO
      .inputBox_email()
      .invoke("prop", "validationMessage")
      .should("equal", commonData.errorMsgForBlankInput);
    pages.summaryPO.form_block().within(() => {
      cy.get("input:invalid").should("have.length", 12);
    });
    pages.summaryPO.button_finalSubmit().click();
    pages.summaryPO.inputBox_firstName().type(e2eData.dataSet1.firstName);
    pages.summaryPO.form_block().within(() => {
      cy.get("input:invalid").should("have.length", 11);
    });
    pages.summaryPO.button_finalSubmit().click();
    pages.summaryPO.inputBox_lastName().type(e2eData.dataSet1.lastName);
    pages.summaryPO.form_block().within(() => {
      cy.get("input:invalid").should("have.length", 10);
    });
    pages.summaryPO.button_finalSubmit().click();
    pages.summaryPO.inputBox_email().type(e2eData.dataSet1.email);
    pages.summaryPO.form_block().within(() => {
      cy.get("input:invalid").should("have.length", 9);
    });
  });
});
