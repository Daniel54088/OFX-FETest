const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: "cypress/support/e2e.js", // Path to your support file
    setupNodeEvents(on, config) {
      // Node event listeners here
    },
  },
});
