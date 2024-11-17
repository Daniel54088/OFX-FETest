// Support file for Cypress tests

// Example: Set up global hooks or import reusable commands
Cypress.on("uncaught:exception", (err, runnable) => {
  // Prevent Cypress from failing the test on uncaught exceptions
  return false;
});
