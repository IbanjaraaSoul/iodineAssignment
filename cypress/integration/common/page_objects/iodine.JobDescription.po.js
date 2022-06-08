export class jobDescriptionPageObject {
  button_apply() {
    return cy
      .iframe("#gnewtonIframe")
      .find("#gnewtonJobDescriptionBtn > div.gnewtonBlueBtn.gnewtonApplyBtn");
  }
}

export const jobDescriptionPO = new jobDescriptionPageObject();
