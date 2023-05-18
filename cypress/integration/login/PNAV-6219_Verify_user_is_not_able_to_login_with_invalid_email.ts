import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";

describe("Verify user is not able to login with invalid email", () => {
  before(() => {
    cy.visit(constants.loginUrl);
    Login.verifyLogInPageIsLoaded();
  });

  it("Verify user is not able to login with invalid email", () => {
    Login.enterEmailAndPassword(
      constants.incorrectEmail,
      Cypress.env("password")
    );
    cy.log("User entered email and password to login");

    Login.submitLoginButton();
    cy.log("User tap on login button");

    Login.getLoginError().should("contain", constants.logInErrorMessage);
    cy.log("verified user is not able to login with invalid email");
  });
});
