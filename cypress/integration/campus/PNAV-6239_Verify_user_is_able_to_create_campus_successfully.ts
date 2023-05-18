import Login from "../../../pages/login_page";
import constants from "../../fixtures/constants";
import Dashboard from "../../../pages/dashboard_page";
import campus from "../../../pages/facility/facility_campuses";

describe("Verify user is able to create campus successfully", () => {
    const citiesLength = 1;
    before(() => {
        cy.visit(constants.loginUrl);
        Login.verifyLogInPageIsLoaded();
    });

    it("Verify user is able to create campus successfully", () => {
        Login.enterEmailAndPassword(Cypress.env("EMAIL"), Cypress.env("PASSWORD"));
        cy.log("User entered email and password to login");

        Login.submitLoginButton();
        cy.log("User tap on login button");

        Dashboard.tapOnFacilityTab();
        Dashboard.tapOnCampusesTab();
        cy.log("User tap on campuses sub menu option in facility");

        campus.tapOnCreateCampus();
        campus.fillCreateCampusForm()
    });
});
