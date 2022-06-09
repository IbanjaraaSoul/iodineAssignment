export class disclaimerPageObject {
  button_continue() {
    return cy.iframe("#gnewtonIframe").find("#gnewton-submit");
  }
}

export const disclaimerPO = new disclaimerPageObject();
