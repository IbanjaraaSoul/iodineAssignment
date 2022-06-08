export class ventranPageObject {
  iframe_common() {
    return cy.iframe("#gnewtonIframe");
  }
}

export const vetranPO = new ventranPageObject();
