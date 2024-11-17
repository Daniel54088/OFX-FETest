describe("Currency Conversion", () => {
  beforeEach(() => {
    // Replace `http://localhost:3000` with your app's base URL
    cy.visit("http://localhost:3000");
  });

  it("should display the initial dropdown selections and amount input", () => {
    // Verify the dropdowns are displayed with initial values
    cy.get('[data-testid="from-dropdown"]').should("contain.text", "AUD");
    cy.get('[data-testid="to-dropdown"]').should("contain.text", "USD");

    // Verify the input field is empty initially
    cy.get('[data-testid="amount-input"]').should("have.value", "");
  });

  it("should update calculations when the amount input changes", () => {
    // wait first API call
    cy.wait(1000);
    // Enter a valid amount
    cy.get('[data-testid="amount-input"]').type("1000");

    // Wait for debounce and verify the results
    cy.wait(300); // Match the debounce delay
    cy.get('[data-testid="true-amount"]').should(
      "contain.text",
      "True Amount: $654.4"
    );
    cy.get('[data-testid="marked-up-amount"]').should(
      "contain.text",
      "Marked-Up Amount: $654.07"
    );
  });

  it("should update results when dropdown values are changed", () => {
    // wait first API call
    cy.wait(1000);
    // Change the "From" currency
    cy.get('[data-testid="from-dropdown"]').click();
    cy.get('[data-dropdown="true"] button').contains("GBP").click(); // Select GBP

    // Change the "To" currency
    cy.get('[data-testid="to-dropdown"]').click();
    cy.get('[data-dropdown="true"] button').contains("AUD").click();

    // Verify the dropdown values are updated
    cy.get('[data-testid="from-dropdown"]').should("contain.text", "GBP");
    cy.get('[data-testid="to-dropdown"]').should("contain.text", "AUD");
  });

  it("should display an error message if the API fails", () => {
    // wait first API call
    cy.wait(1000);

    // Change the "To" currency
    cy.get('[data-testid="to-dropdown"]').click();
    cy.get('[data-dropdown="true"] button').contains("ARS").click();

    // Verify error message is displayed
    cy.get('[data-testid="error-message"]').should(
      "contain.text",
      "We could not determine an FX rate for AUD/ARS. Please try again later or contact us if the issue persists."
    );

    // Verify input is cleared
    cy.get('[data-testid="amount-input"]').should("have.value", "");
  });

  it("should not allow invalid amounts", () => {
    // Enter an invalid amount
    cy.get('[data-testid="amount-input"]').type("abc");

    // Verify that no calculation occurs
    cy.get(".results").should("not.exist");
  });

  it("should allow switching back and forth between valid inputs", () => {
    // Enter a valid amount
    cy.get('[data-testid="amount-input"]').type("1000");

    // Wait for debounce and verify results
    cy.wait(300);

    cy.get('[data-testid="true-amount"]').should(
      "contain.text",
      "True Amount: $654.4"
    );
    cy.get('[data-testid="marked-up-amount"]').should(
      "contain.text",
      "Marked-Up Amount: $654.07"
    );
    // Clear the input
    cy.get('[data-testid="amount-input"]').clear();

    // Enter another valid amount
    cy.get('[data-testid="amount-input"]').type("10000");

    // Wait for debounce and verify updated results
    cy.wait(300);
    cy.get('[data-testid="true-amount"]').should(
      "contain.text",
      "True Amount: $6,544"
    );
    cy.get('[data-testid="marked-up-amount"]').should(
      "contain.text",
      "Marked-Up Amount: $6,540.73"
    );
  });
});
