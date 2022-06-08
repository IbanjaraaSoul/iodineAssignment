export class disabilityPageObject {
  iframe_common() {
    return cy.iframe("#gnewtonIframe");
  }
}

export const disabilityPO = new disabilityPageObject();
