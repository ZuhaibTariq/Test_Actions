import { Constants } from "../cypress/fixtures/constants";

export class BasePage {
  constants: Constants;

  constructor() {
    this.constants = new Constants();
  }

  /**
   * verify text is matched
   * @param element - element to check
   * @param text_to_compare - text to compare with
   */
  verifyTextMatched(element: any, text_to_compare: any): void {
    element.should("have.text", text_to_compare);
  }

  /**
   * verify element contains text
   * @param element - element to check
   * @param text - text to match
   * @returns {element} element of contains text
   */
  verifyElementContainsText(element: any, text: string) {
    return cy
      .get(element, { timeout: this.constants.longDelay })
      .contains(text, { matchCase: false });
  }

  /**
   * verify element contains list of texts
   * @param list_of_texts - list of texts to verify
   * @param element - element to check with
   */
  verifyElementsContainsListOfTexts(list_of_texts: any, element: any): boolean {
    for (let each_value of list_of_texts) {
      this.verifyElementContainsText(element, each_value);
    }
    return true;
  }

  waitForPageLoad(time: number = 2000) {
    cy.wait(time);
  }
}
export default new BasePage();
