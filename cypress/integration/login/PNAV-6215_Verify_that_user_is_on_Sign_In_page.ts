import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";

describe("Verify that user is on sign in page", () => {
  before(() => {
    cy.visit(constants.loginUrl);
    cy.url().should("contain", constants.login);
  });

  it("user should be on sign in page", () => {
    Login.getPageHeading().should("contain", constants.loginPageHeading);
    cy.log("Page heading verified");

    Login.getEmail().should("exist");
    Login.getPassword().should("exist");
    Login.getLoginButton().should("exist");
    Login.getRegisterLink().should("exist");
    cy.log("All page components verified.");
  });
});
