export class careerPageObject {
  link_opening(JobProfile) {
    return cy.iframe("#gnewtonIframe").find('a[ns-qa="' + JobProfile + '"]');
  }
}

export const careerPO = new careerPageObject();
