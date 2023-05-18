const randomValue = Math.floor(Math.random() * 900001);
export class Constants {
  loginPageHeading = "Welcome to PenguinIN";
  loginUrl = "https://sec.penguinin.com:9090/QA1";
  login = "/login";
  longDelay = 20000;
  shortDelay = 2000;
  blankFieldsErrorMessage = ["password is required", "email is required"];
  incorrectEmail = "abc@gmail.com";
  logInErrorMessage = "User not found or incorrect password";
  incorrectPassword = `${randomValue}`;
  userName = "Majd Alzghoul";
  registerUrl = "/register";
  sidebarOptions = [
    "Dashboard",
    "Solutions",
    "People",
    "Assets",
    "Simulator",
    "Site Calibration",
    "Settings",
  ];
  sidebarSubOption = ["Facility", "Infrastructure", "Intelligence"];
  facility = "Facility";
  facilitySubTabs = [
    "Campuses",
    "Venues",
    "Floors",
    "POIs",
    "Departments",
    "Categories",
  ];
  campus = "campus";
  campusUrl = "/campuses";
  createUrl = "/create";
  campusFormLabels = [
    "Campus Name",
    "Address",
    "Time Zone",
    "Icon",
    "Operating Hours",
    "Location & Border",
  ];
  campusFormErrors = [
    "This field is required",
    "These fields are required",
    "Campus icon is required",
    "You have to draw the area of campus",
  ];
}
export default new Constants();
