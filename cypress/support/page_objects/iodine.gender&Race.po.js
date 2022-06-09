export class genderRacePageObject {
  radiobutton_gender() {
    return cy.enter("#gnewtonIframe").then((getBody) => {
      getBody().find("#male + span + span");
    });
  }
  radiobutton_race() {
    return cy.iframe("#gnewtonIframe").find("#race-8 + span + span");
  }
}

export const genderRacePO = new genderRacePageObject();
