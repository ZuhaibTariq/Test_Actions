import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";
import Dashboard from "../../../pages/dashboard_page";

describe("Verify options under Facility Tab in Navigation Bar", () => {
  before(() => {
    cy.visit(constants.loginUrl);
    Login.verifyLogInPageIsLoaded();
  });

  it("Verify options under Facility Tab in Navigation Bar", () => {
    Login.enterEmailAndPassword(Cypress.env("email"), Cypress.env("password"));
    cy.log("User entered email and password to login");

    Login.submitLoginButton();
    cy.log("User tap on login button");

    Login.getSidebar().should("exist");
    cy.log(
      "verified user has logged in successfully and sidebar exist on dashboard page."
    );

    Dashboard.tapOnFacilityTab();
    Dashboard.verifyFacilitySubOptions();
    cy.log("Submenu tabs verified in facility.");
  });
});
