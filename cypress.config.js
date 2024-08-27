const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "q2wgxt",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      hmtl: true,
      json: true,
      timestamp: "mmddyyy_HHMMss"
    }
  },
});
