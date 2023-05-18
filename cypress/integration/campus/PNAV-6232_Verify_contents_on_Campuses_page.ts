import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";
import Dashboard from "../../../pages/dashboard_page";
import campus from "../../../pages/facility/facility_campuses";

describe("Verify user is navigated to Campuses page", () => {
  before(() => {
    cy.visit(constants.loginUrl);
    Login.verifyLogInPageIsLoaded();
  });

  it("Verify user is navigated to Campuses page", () => {
    Login.enterEmailAndPassword(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    cy.log("User entered email and password to login");

    Login.submitLoginButton();
    cy.log("User tap on login button");

    Dashboard.tapOnFacilityTab();
    Dashboard.tapOnCampusesTab();
    cy.log("User tap on campuses sub menu option in facility");

    campus.verifyHeading();
    cy.url().should("contain", constants.campusUrl);
    campus.getCreateCardButton().should("exist");
    campus.getCreatedCards().should("exist");
    cy.log("Create card button and created cards verified on page");
  });
});
