import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";

describe("Verify validation errors with user try to login with empty fields", () => {
  before(() => {
    cy.visit(constants.loginUrl);
    Login.verifyLogInPageIsLoaded();
  });

  it("Verify validation errors with user try to login with empty fields", () => {
    Login.tapOnRegisterLink();
    cy.log("User click on register link");

    cy.url().should("contain", constants.registerUrl);
    cy.log("Verified that user is navigated to register page successfully.");
  });
});
