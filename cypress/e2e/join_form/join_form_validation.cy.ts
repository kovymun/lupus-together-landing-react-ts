/// <reference types="cypress" />

/**
 * Cypress tests for the "Join Our Community" form frontend validation.
 * These tests focus on React Hook Form validation rules:
 * - Required fields
 * - Missing consent checkbox
 * - Message length exceeding 50 characters
 */

describe("Join Form Frontend Validation", () => {
  beforeEach(() => {
    // Visit the join form page before each test
    cy.visit("/#join");
  });

  it("shows required field errors when submitting empty form", () => {
    cy.get('[data-cy="join-submit-btn"]').click();

    // First Name required
    cy.get('[data-cy="join-first-name"]')
      .closest(".input-container")
      .find(".form-error-text")
      .should("be.visible")
      .and("contain.text", "Please enter first name");

    // Last Name required
    cy.get('[data-cy="join-last-name"]')
      .closest(".input-container")
      .find(".form-error-text")
      .should("be.visible")
      .and("contain.text", "Please enter last name");

    // Email required
    cy.get('[data-cy="join-email"]')
      .closest(".input-container")
      .find(".form-error-text")
      .should("be.visible")
      .and("contain.text", "Please enter an email address");

    // Phone required
    cy.get('[data-cy="join-phone"]')
      .closest(".input-container")
      .find(".form-error-text")
      .should("be.visible")
      .and("contain.text", "Contact number is required");

    // Consent checkbox required
    cy.get('[data-cy="join-consent"]')
      .closest(".consent-container")
      .find(".form-error-text")
      .should("be.visible")
      .and("contain.text", "You must agree before continuing");
  });

  it("shows error when message exceeds 50 characters", () => {
    const longMessage =
      "This message is deliberately longer than fifty characters to trigger validation";

    cy.get('[data-cy="join-message"]').type(longMessage);
    cy.get('[data-cy="join-submit-btn"]').click();

    cy.get('[data-cy="join-message"]')
      .closest(".input-container")
      .find(".form-error-text, .text-xs")
      .should("be.visible")
      .and("contain.text", "Message too long (max 50 characters)");
  });

  it("requires consent checkbox to be checked", () => {
    // Fill valid data for other fields
    cy.get('[data-cy="join-first-name"]').type("Tanya");
    cy.get('[data-cy="join-last-name"]').type("Abigail");
    cy.get('[data-cy="join-email"]').type("tanya@test.com");
    cy.get('[data-cy="join-phone"]').type("0811234567");

    cy.get('[data-cy="join-submit-btn"]').click();

    cy.get('[data-cy="join-consent"]')
      .closest(".consent-container")
      .find(".form-error-text")
      .should("be.visible")
      .and("contain.text", "You must agree before continuing");
  });

  it("passes validation when all fields are valid", () => {
    cy.get('[data-cy="join-first-name"]').type("Tanya");
    cy.get('[data-cy="join-last-name"]').type("Abigail");
    cy.get('[data-cy="join-email"]').type("tanya@test.com");
    cy.get('[data-cy="join-phone"]').type("0811234567");
    cy.get('[data-cy="join-message"]').type(
      "Hello, excited to join Lupus Together!"
    );
    cy.get('[data-cy="join-consent"]').check();

    // Click submit to trigger validations
    cy.get('[data-cy="join-submit-btn"]').click();

    // No validation errors should exist
    cy.get(".form-error-text").should("not.exist");
  });
});
