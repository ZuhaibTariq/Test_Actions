import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";
import Dashboard from "../../../pages/dashboard_page";
import campus from "../../../pages/facility/facility_campuses";

describe("Verify no cities available in list until country is selected", () => {
  const citiesLength = 1;
  before(() => {
    cy.visit(constants.loginUrl);
    Login.verifyLogInPageIsLoaded();
  });

  it("Verify no cities available in list until country is selected", () => {
    Login.enterEmailAndPassword(Cypress.env("email"), Cypress.env("password"));
    cy.log("User entered email and password to login");

    Login.submitLoginButton();
    cy.log("User tap on login button");

    Dashboard.tapOnFacilityTab();
    Dashboard.tapOnCampusesTab();
    cy.log("User tap on campuses sub menu option in facility");

    campus.tapOnCreateCampus();
    campus
      .verifyCountryInDropdown()
      .should("not.have.length.greaterThan", citiesLength);
    cy.log("Verified no cities in dropdown");
  });
});
