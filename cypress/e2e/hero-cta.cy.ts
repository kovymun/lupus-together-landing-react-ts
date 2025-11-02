/// <reference types="cypress" />

// TEST: Hero CTA scroll behavior (Desktop & Tablet only)
// Purpose: Ensure that clicking the Hero "Join Our Community!" CTA scrolls smoothly to the Join section.

describe("Hero CTA Scroll Functionality (Desktop & Tablet)", () => {
  // Viewports to test
  const viewports = [
    { name: "Desktop", width: 1280, height: 900 },
    { name: "Tablet", width: 768, height: 1024 },
  ];

  viewports.forEach((vp) => {
    describe(`Viewport: ${vp.name}`, () => {
      beforeEach(() => {
        cy.viewport(vp.width, vp.height);
        cy.visit("/");
      });

      it(`Should scroll to the "Join" section when the Hero CTA is clicked`, () => {
        // Click on the CTA button
        cy.contains("Join Our Community!").click({ force: true });

        // Wait for scroll animation (increase to 4000ms for GUI inspection in dev | 700/800ms in production CI)
        cy.wait(4000);

        // Verify that the Join section is visible after scrolling
        cy.get("#join").should("be.visible");
      });
    });
  });
});
