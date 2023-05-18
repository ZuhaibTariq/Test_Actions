import constants from "../cypress/fixtures/constants";
import { BasePage } from "../globals/base_page";

export class Login extends BasePage {
  public get mainLogo() {
    return ".Login__logo";
  }
  public get pageHeading() {
    return "h3";
  }
  public get emailField() {
    return "input[placeholder='Email']";
  }
  public get passwordField() {
    return "input[placeholder='Password']";
  }
  public get loginButton() {
    return "form[class='Login__form'] button[type='submit']";
  }
  public get registerLink() {
    return ".Login__registerBtn";
  }
  public get errorMessage() {
    return ".ValidationText.ValidationText--danger";
  }
  public get sidebar() {
    return "#sidebar";
  }

  getPageHeading() {
    return cy.get(this.pageHeading);
  }

  getEmail() {
    return cy.get(this.emailField);
  }

  getPassword() {
    return cy.get(this.passwordField);
  }

  getLoginButton() {
    return cy.get(this.loginButton);
  }

  getRegisterLink() {
    return cy.get(this.registerLink);
  }

  verifyLogInPageIsLoaded() {
    cy.get(this.mainLogo).should("be.visible");
  }

  /**
   * submit login button
   */
  submitLoginButton() {
    cy.get(this.loginButton).click();
  }

  /**
   * Verify error message is displayed if fields are left empty
   */
  verifyBlankFieldsError() {
    this.verifyElementsContainsListOfTexts(
      constants.blankFieldsErrorMessage,
      this.errorMessage
    );
  }

  /**
   *  enter email and password
   * @param email - user email
   * @param password - user password
   */
  enterEmailAndPassword(email: string, password: string) {
    cy.get(this.emailField).click().type(email);
    cy.get(this.passwordField).click().type(password);
  }

  getLoginError() {
    return cy.get(this.errorMessage);
  }

  getSidebar() {
    return cy.get(this.sidebar);
  }

  tapOnRegisterLink() {
    cy.get(this.registerLink).click();
  }
}
export default new Login();
