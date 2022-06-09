export class homePageObject {
  link_company() {
    return cy.get('#menu-item-4050 > [href="#"]');
  }
}

export const homePO = new homePageObject();
