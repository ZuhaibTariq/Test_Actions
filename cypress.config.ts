import { defineConfig } from "cypress";
const fs = require("fs-extra");

const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

export default defineConfig({
  projectId: "nv94b9",
  e2e: {
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 60000,
    pageLoadTimeout: 60000,
    baseUrl: "https://sec.penguinin.com:9090/QA1",
    experimentalSourceRewriting: false,
    watchForFileChanges: false,
    chromeWebSecurity: false,
    specPattern: "cypress/integration/",
    projectId: "nv94b9",
    reporter: "mochawesome",
    video: false,
    reporterOptions: {
      reportDir: "cypress/results",
      overwrite: false,
      html: false,
      json: true,
    },
    setupNodeEvents(on, config) {

      getCompareSnapshotsPlugin(on, config);

      // implement node event listeners here
    },
  },
});
