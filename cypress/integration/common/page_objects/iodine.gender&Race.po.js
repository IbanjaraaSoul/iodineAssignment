export class genderRacePageObject {
  radiobutton_gender() {
    return cy.enter("#gnewtonIframe").then((getBody) => {
      getBody().find("#male");
    });
  }
  radiobutton_race() {
    return cy.iframe("#gnewtonIframe").find("#race-8");
  }
}

export const genderRacePO = new genderRacePageObject();
