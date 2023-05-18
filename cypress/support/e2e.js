// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
import "cypress-file-upload";

// Cypress.Cookies.defaults({
//   // preserve: ["G_ENABLED_IDPS", "_ga", "sessionid", "csrftoken"],
//   preserve: ["G_ENABLED_IDPS", "_ga", "csrftoken"],
// });

const resizeObserverLoopErrRe = /^[^(ResizeObserver loop limit exceeded)]/;
Cypress.on("uncaught:exception", (err) => {
  /* returning false here prevents Cypress from failing the test */
  if (resizeObserverLoopErrRe.test(err.message)) {
    return false;
  }
});

require("cypress-xpath");
require("cypress-plugin-tab");
// Alternatively you can use CommonJS syntax:
// require('./commands')
const compareSnapshotCommand = require('cypress-image-diff-js/dist/command')
compareSnapshotCommand()