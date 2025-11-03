/**
 * JOIN FORM: SUBMISSION TESTS
 *
 * This suite tests the full user flow for the “Join the Community” form:
 * - Ensures frontend validation prevents premature submission
 * - Verifies successful form submission flow with mocked 201 response
 * - Verifies duplicate email handling with mocked 400 response
 * All backend requests are intercepted using the wildcard `wildcard/api/community/`
 */

describe("Lupus Together JOIN FORM: User Submission Flow (Mocked API and token)", () => {
  const apiUrl = "**/api/community/";

  beforeEach(() => {
    // Visit the section that contains the join form
    cy.visit("/#join");

    // Ensure section and form has loaded before interacting
    cy.get('[data-cy="join-section"], [data-cy="join-form"]')
      .should("exist")
      .and("be.visible");
  });

  it("prevents submission when required fields are invalid or unchecked", () => {
    // Attempt to submit without filling any inputs
    cy.get('[data-cy="join-submit-btn"]').click();

    // Expect inline validation messages for missing required fields
    cy.get(".form-error-text").should(
      "contain.text",
      "Please enter first name"
    );
    cy.get(".form-error-text").should("contain.text", "Please enter last name");
    cy.get(".form-error-text").should(
      "contain.text",
      "Please enter an email address"
    );
    cy.get(".form-error-text").should(
      "contain.text",
      "Contact number is required"
    );
    cy.get(".form-error-text").should(
      "contain.text",
      "You must agree before continuing"
    );

    // Confirm no network request was sent to backend
    cy.intercept("POST", apiUrl).as("postApiCommunity");
    cy.get("@postApiCommunity.all").should("have.length", 0);
  });

  it("submits successfully and shows success toast (mocked token)", () => {
    // Intercept POST request and simulate token handshake
    cy.intercept("POST", apiUrl, (req) => {
      // Add a mocked token header
      req.headers["X-FRONTEND-KEY"] = "mocked_test_frontend_key_123@#2";

      // Mock successful response
      req.reply({
        statusCode: 201,
        body: { title: "apiResponse", success: true },
        delayMs: 700,
      });
    }).as("postJoin");

    // Fill out valid form fields
    cy.get('[data-cy="join-first-name"]').type("Michael");
    cy.get('[data-cy="join-last-name"]').type("Stevens");
    cy.get('[data-cy="join-email"]').type("michaels@test.com");
    cy.get('[data-cy="join-phone"]').type("0819876543");
    cy.get('[data-cy="join-message"]').type(
      "Looking forward to joining the community"
    );
    cy.get('[data-cy="join-consent"]').check();

    // Submit form
    cy.get('[data-cy="join-submit-btn"]').click();

    // Wait for the mocked API call
    cy.wait("@postJoin");

    // Assert success toast
    cy.contains("💜 Welcome to Lupus Together!").should("be.visible");

    // Verify form reset
    cy.get('[data-cy="join-first-name"]').should("have.value", "");
    cy.get('[data-cy="join-last-name"]').should("have.value", "");
    cy.get('[data-cy="join-email"]').should("have.value", "");
    cy.get('[data-cy="join-phone"]').should("have.value", "");
    cy.get('[data-cy="join-message"]').should("have.value", "");
    cy.get('[data-cy="join-consent"]').should("not.be.checked");
  });

  it("handles duplicate email user registration (mocked token)", () => {
    // Mock backend error for duplicate email
    cy.intercept("POST", apiUrl, (req) => {
      // Add a mocked token header
      req.headers["X-FRONTEND-KEY"] = "mocked_test_frontend_key_123@#2";

      // Mock a duplicate email response
      req.reply({
        statusCode: 400,
        body: {
          success: false,
          error: "This email is already registered",
        },
        delayMs: 500,
      });
    }).as("postEmailDuplicate");

    // Fill out valid form data
    cy.get('[data-cy="join-first-name"]').type("Michael");
    cy.get('[data-cy="join-last-name"]').type("Stevens");
    cy.get('[data-cy="join-email"]').type("michaels@test.com");
    cy.get('[data-cy="join-phone"]').type("0824567890");
    cy.get('[data-cy="join-message"]').type(
      "Looking forward to joining the community!"
    );
    cy.get('[data-cy="join-consent"]').check();

    // Submit form
    cy.get('[data-cy="join-submit-btn"]').click();

    // Wait for the intercepted API call
    cy.wait("@postEmailDuplicate");

    // Assert that the duplicate email toast appears (match unique substring from the component toast message)
    cy.contains("It looks like this email is already registered").should(
      "be.visible"
    );

    // Verify form reset
    cy.get('[data-cy="join-first-name"]').should("have.value", "");
    cy.get('[data-cy="join-last-name"]').should("have.value", "");
    cy.get('[data-cy="join-email"]').should("have.value", "");
    cy.get('[data-cy="join-phone"]').should("have.value", "");
    cy.get('[data-cy="join-message"]').should("have.value", "");
    cy.get('[data-cy="join-consent"]').should("not.be.checked");
  });
});
