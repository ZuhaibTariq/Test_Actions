import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";
import Dashboard from "../../../pages/dashboard_page";

describe("Verify navigation UI contents and their interactions on Dashboard", () => {
  before(() => {
    cy.visit(constants.loginUrl);
    Login.verifyLogInPageIsLoaded();
  });

  it("Verify navigation UI contents and their interactions on Dashboard", () => {
    Login.enterEmailAndPassword(cypress.env("EMAIL"), cypress.env("PASSWORD"));
    cy.log("User entered email and password to login");

    Login.submitLoginButton();
    cy.log("User tap on login button");

    Login.getSidebar().should("exist");
    cy.log(
      "verified user has logged in successfully and sidebar exist on dashboard page."
    );

    Dashboard.verifyUserName();
    cy.log("Verified the username is accurately displayed");

    Dashboard.verifyOptionsInSidebar();
    Dashboard.verifySubOptionsInSidebar();
    cy.log("Option in sidebar verified.");
  });
});
