import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";
import Dashboard from "../../../pages/dashboard_page";
import campus from "../../../pages/facility/facility_campuses";

describe("Verify contents of Create Campus", () => {
  let length = 3;
  let buttonsLength = 2;

  before(() => {
    cy.visit(constants.loginUrl);
    Login.verifyLogInPageIsLoaded();
  });

  it("Verify contents of Create Campus", () => {
    Login.enterEmailAndPassword(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    cy.log("User entered email and password to login");

    Login.submitLoginButton();
    cy.log("User tap on login button");

    Dashboard.tapOnFacilityTab();
    Dashboard.tapOnCampusesTab();
    cy.log("User tap on campuses sub menu option in facility");

    campus.tapOnCreateCampus();
    campus.verifyCreateCampusFormFields();

    campus.getFormDropdown().should("have.length", length);
    campus.getIconDropdown().should("exist");
    campus.getInputFields().should("have.length", length);
    campus.getDrawingButton().should("exist");
    campus.getMap().should("exist");
    campus.getZoomControlButtons().should("exist");
    campus.getFormButtons().should("have.length", buttonsLength);
    cy.log("Campuses page components verified.");
  });
});
