export class ventranPageObject {
  radiobutton_vetran() {
    return cy
      .iframe("#gnewtonIframe")
      .find("#not-identify-identify + span + span");
  }
}

export const vetranPO = new ventranPageObject();
