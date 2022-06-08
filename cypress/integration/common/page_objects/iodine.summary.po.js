export class summaryPageObject {
  iframe_common() {
    return cy.iframe("#gnewtonIframe");
  }
}

export const summaryPO = new summaryPageObject();
