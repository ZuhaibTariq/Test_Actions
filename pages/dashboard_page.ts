import constants from "../cypress/fixtures/constants";
import base_page from "../globals/base_page";
import { Login } from "./login_page";
import Constants from "../cypress/fixtures/constants";

export class Dashboard extends Login {
  private get sidebarOptions() {
    return ".SidebarMenuItem__label";
  }
  private get sidebarSubOptions() {
    return ".SidebarSubmenu__dropdownLabel";
  }
  private get subMenuItems() {
    return ".SidebarSubmenuItem__label";
  }
  private get userName() {
    return "[class*='userName']";
  }

  /**
   * Verify the username appears correctly
   */
  verifyUserName() {
    base_page.verifyTextMatched(cy.get(this.userName), constants.userName);
  }

  verifyOptionsInSidebar() {
    this.verifyElementsContainsListOfTexts(
      Constants.sidebarOptions,
      this.sidebarOptions
    );
  }

  verifySubOptionsInSidebar() {
    this.verifyElementsContainsListOfTexts(
      Constants.sidebarSubOption,
      this.sidebarSubOptions
    );
  }

  tapOnFacilityTab() {
    cy.get(this.sidebarSubOptions).contains(constants.facility).click();
  }

  verifyFacilitySubOptions() {
    this.verifyElementsContainsListOfTexts(
      constants.facilitySubTabs,
      this.subMenuItems
    );
  }

  tapOnCampusesTab() {
    cy.get(this.subMenuItems).contains(constants.facilitySubTabs[0]).click();
  }
}

export default new Dashboard();
