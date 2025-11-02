/// <reference types="cypress" />

// --------- Desktop & Tablet Testing ---------

// Cypress E2E tests for Navbar scroll functionality (Desktop & Tablet only)

describe("Navbar scroll functionality: Desktop & Tablet", () => {
  // Define nav links and their target sections
  const navLinks = [
    { linkId: "nav-home", sectionId: "hero" },
    { linkId: "nav-about", sectionId: "about" },
    { linkId: "nav-lupus", sectionId: "lupus" },
    { linkId: "nav-stories", sectionId: "stories" },
    { linkId: "nav-members", sectionId: "members" },
    { linkId: "nav-join", sectionId: "join" },
  ];

  // Viewports to test (Desktop & Tablet)
  const viewports = [
    { name: "desktop", width: 1280, height: 900 },
    { name: "tablet", width: 768, height: 1024 },
  ];

  viewports.forEach((vp) => {
    describe(`Viewport: ${vp.name}`, () => {
      beforeEach(() => {
        cy.viewport(vp.width, vp.height);
        cy.visit("/");
      });

      navLinks.forEach(({ linkId, sectionId }) => {
        it(`should scroll to ${sectionId} when nav link ${linkId} is clicked`, () => {
          // Click the nav link
          cy.get(`[data-cy-link-id="${linkId}"]`).click({ force: true });

          // Wait for smooth scroll animation (placeholder: 800ms)
          cy.wait(800);

          // Verify the target section is visible
          cy.get(`#${sectionId}`).should("be.visible");

          // scroll into view to ensure proper alignment
          cy.get(`#${sectionId}`).scrollIntoView().should("be.visible");
        });
      });
    });
  });
});
