export class summaryPageObject {
  label_submissionHelp() {
    return cy.iframe("#gnewtonIframe").find("#gnewtonHelpTextOfSubmission");
  }
  inputBox_firstName() {
    return cy.iframe("#gnewtonIframe").find("#firstName");
  }
  inputBox_lastName() {
    return cy.iframe("#gnewtonIframe").find("#lastName");
  }
  inputBox_email() {
    return cy.iframe("#gnewtonIframe").find("#email");
  }
  form_block() {
    return cy.iframe("#gnewtonIframe").find("#gnewtonForm");
  }
  button_finalSubmit() {
    return cy.iframe("#gnewtonIframe").find("#submitText");
  }
}

export const summaryPO = new summaryPageObject();
