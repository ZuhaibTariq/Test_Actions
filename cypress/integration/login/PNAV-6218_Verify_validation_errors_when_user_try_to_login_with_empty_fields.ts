import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";

describe("Verify validation errors with user try to login with empty fields", () => {
  before(() => {
    cy.visit(constants.loginUrl);
    Login.verifyLogInPageIsLoaded();
  });

  it("Verify validation errors with user try to login with empty fields", () => {
    Login.submitLoginButton();
    cy.log("User leaves the fields empty and clicked on Login button");

    Login.verifyBlankFieldsError();
    cy.log("Empty fields errors verified");
  });
});
