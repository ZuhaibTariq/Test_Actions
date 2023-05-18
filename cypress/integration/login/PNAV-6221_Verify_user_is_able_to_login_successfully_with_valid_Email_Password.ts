import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";
import Dashboard from "../../../pages/dashboard_page";

describe("Verify user is able to login successfully with valid Email and Password", () => {
  before(() => {
    cy.visit(constants.loginUrl);
    Login.verifyLogInPageIsLoaded();
  });

  it("Verify user is able to login successfully with valid Email and Password", () => {
    Login.enterEmailAndPassword(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
    cy.log("User entered email and password to login");

    Login.submitLoginButton();
    cy.log("User tap on login button");

    Login.getSidebar().should("exist");
    cy.log(
      "verified user has logged in successfully and sidebar exist on dashboard page."
    );

    Dashboard.verifyUserName();
    cy.log("Verified the username is accurately displayed");
  });
});
