import { Given } from "cypress-cucumber-preprocessor/steps";
import * as commonData from "../../../fixtures/data/commonData.json";
import * as e2eData from "../../../fixtures/data/sampleE2EDataSet.json";
import pages from "../page_objects/page.object.index";
Given(
  "user is in home page of IodineSoftwar & starts applying to {string} under career section",
  (JobProfile) => {
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
    pages.careerPO.link_opening(JobProfile).should("be.visible").click();
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
  }
);
