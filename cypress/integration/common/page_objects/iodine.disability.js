export class disabilityPageObject {
  radiobutton_disability() {
    return cy
      .iframe("#gnewtonIframe")
      .find("#declined_disability + span + span");
  }
  inputBox_yourName() {
    return cy.iframe("#gnewtonIframe").find("#your-name");
  }
  inputBox_date() {
    return cy.iframe("#gnewtonIframe").find("#today-date");
  }
}

export const disabilityPO = new disabilityPageObject();
