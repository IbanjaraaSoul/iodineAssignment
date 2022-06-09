export class basicQuesPageObject {
  checkBox_usaAuthorised() {
    return cy
      .iframe("#gnewtonIframe")
      .find("#y_8a7883a97c7b0baf017ca44b07f32134");
  }
  checkBox_futureSponsership() {
    return cy
      .iframe("#gnewtonIframe")
      .find("#n_8a7883a97c7b0baf017ca44cda7d2224");
  }
  button_continue() {
    return cy.iframe("#gnewtonIframe").find('div[ns-qa="continueBtn"]');
  }
}

export const basicQuesPO = new basicQuesPageObject();
