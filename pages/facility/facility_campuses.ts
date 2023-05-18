import { Dashboard } from "../dashboard_page";
import constants from "../../cypress/fixtures/constants";
import testData from "../../cypress/fixtures/testData";

export class Campus extends Dashboard {
  private get createCardButton() {
    return "#addCampusBtn";
  }
  private get createdCards() {
    return ".CampusCard";
  }

  private get heading() {
    return "div.PageHeader > span";
  }

  private get campusNameInput() {
    return "#campusNameInput";
  }

  private get formDropdown() {
    return ".Select__dropdown";
  }

  private get campusFormLabels() {
    return ".Label";
  }
  private get iconDropdown() {
    return ".IconSelect__dropdown";
  }
  private get inputFields() {
    return ".TextInput";
  }
  private get drawingButton() {
    return ".CampusForm__drawingBtnGroup > button";
  }
  private get map() {
    return "canvas";
  }
  private get mapZoomControl() {
    return ".MapZoomControl";
  }
  private get formButtons() {
    return ".CampusForm__actions > button";
  }

  private get citiesInDropdown() {
    return "#campusCitySelect option";
  }

  private get campusName() { return "#campusNameInput"; }
  private get icon() { return ".IconSelectOption"; }
  private get street() { return "#campusStreetInput"; }
  private get streetAddressList() { return ".AutcompleteListItem"; }
  private get operatingHoursCheckBox() { return ".Checkbox__check"; }
  private get operatingHoursDays() { return ".DayOperatingHours__day"; }
  private get locationInput() { return "input[placeholder*='Latitude']"; }

  getCreateCardButton() {
    return cy.get(this.createCardButton);
  }

  getCreatedCards() {
    return cy.get(this.createdCards);
  }

  verifyHeading() {
    cy.get(this.heading).should("exist");
  }

  tapOnCreateCampus() {
    this.getCreateCardButton().click();
  }

  getCampusNameInput() {
    return cy.get(this.campusNameInput);
  }

  verifyCreateCampusFormFields() {
    this.verifyElementsContainsListOfTexts(
      constants.campusFormLabels,
      this.campusFormLabels
    );
  }

  getFormDropdown() {
    return cy.get(this.formDropdown);
  }

  getIconDropdown() {
    return cy.get(this.iconDropdown);
  }

  getInputFields() {
    return cy.get(this.inputFields);
  }

  getDrawingButton() {
    return cy.get(this.drawingButton);
  }

  getMap() {
    return cy.get(this.map);
  }

  getZoomControlButtons() {
    return cy.get(this.mapZoomControl);
  }

  getFormButtons() {
    return cy.get(this.formButtons);
  }

  tapOnFormSubmitButton() {
    this.getFormButtons().last().click();
  }

  verifyEmptyFormErrors() {
    this.verifyElementsContainsListOfTexts(
      constants.campusFormErrors,
      this.errorMessage
    );
  }

  tapOnSelectCountryDropdown() {
    this.getFormDropdown().eq(0).click();
  }

  tapOnSelectCityDropdown() {
    this.getFormDropdown().eq(1).click();
  }

  verifyCountryInDropdown() {
    return cy.get(this.citiesInDropdown);
  }

  fillCreateCampusForm() {
    this.enterCampusName();
    this.selectCountry();
    this.selectCity();
    this.enterStreetAddress();
    this.selectTimeZone();
    this.selectIcon();
    this.selectOperatingHours();
    this.enterLocation();
    this.selectDrawing();
    this.drawCampusOnCanvas();
  }

  enterCampusName() {
    cy.get(this.campusName).type(testData.name);
  }

  selectCountry() {
    cy.get(this.formDropdown).first().select(testData.country);
  }

  selectCity() {
    cy.get(this.formDropdown).eq(1).select(testData.city);
  }

  enterStreetAddress() {
    cy.get(this.street).type(testData.street, {delay:250});
    cy.get(this.streetAddressList).first().click();
  }

  selectTimeZone() {
    cy.get(this.formDropdown).last().select(testData.timeZone);
  }

  selectIcon() {
    cy.get(this.iconDropdown).click();
    cy.get(this.icon).eq(2).click();
  }

  selectOperatingHours() {
    for(let day of testData.days) {
      cy.get(this.operatingHoursDays).filter(`:contains(${day})`).find(this.operatingHoursCheckBox).click();
    }
  }

  enterLocation() {
    cy.get(this.locationInput).type(testData.berlinLatitude);
  }

  selectDrawing() {
    cy.get(this.drawingButton).last().click();
  }

  drawCampusOnCanvas() {
    cy.get('canvas').then($canvas => {
      const canvasWidth = $canvas.width();
      const canvasHeight = $canvas.height();

      const canvasCenterX = canvasWidth / 2;
      const canvasCenterY = canvasHeight / 2;

      cy.wrap($canvas)
          .scrollIntoView()
          .click(canvasCenterX, canvasCenterY);

      cy.wrap($canvas)
          .scrollIntoView()
          .click(canvasCenterX-200, canvasCenterY-200);

    })
    cy.get("canvas").compareSnapshot("positiveTest")
    
    cy.on('uncaught:exception', (err, runnable) => {
      expect(err.message).to.include('Image difference greater than threshold: 0')
      return false
    })

    cy.wrap(cy.get("canvas").compareSnapshot("negativeTest"))
  }
}

export default new Campus();
