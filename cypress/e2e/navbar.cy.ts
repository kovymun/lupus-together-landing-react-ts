// We are testing this to ensure that navbar links reliably scroll users to the correct sections with smooth-scroll functionality, behave consistently across all devices, and prevent regressions.

describe("Navbar scroll functionality across all viewports", () => {
  // Define the nav links and their target sections
  const navLinks = [
    { linkId: "nav-home", sectionId: "hero" },
    { linkId: "nav-about", sectionId: "about" },
    { linkId: "nav-lupus", sectionId: "lupus" },
    { linkId: "nav-stories", sectionId: "stories" },
    { linkId: "nav-members", sectionId: "members" },
    { linkId: "nav-join", sectionId: "join" },
  ];

  // Define viewports to test
  const viewports = [
    { name: "desktop", width: 1280, height: 800 },
    { name: "tablet", width: 768, height: 1024 },
    { name: "mobile", width: 375, height: 667 },
  ];

  viewports.forEach((vp) => {
    describe(`Viewport: ${vp.name}`, () => {
      beforeEach(() => {
        cy.viewport(vp.width, vp.height);
        cy.visit("/");
      });

      navLinks.forEach(({ linkId, sectionId }) => {
        it(`should scroll to ${sectionId} when nav link ${linkId} is clicked`, () => {
          // Handle mobile hamburger menu
          if (vp.name === "mobile") {
            cy.get("body").then(($body) => {
              if ($body.find(".navbar-toggle").length) {
                cy.get(".navbar-toggle").click({ force: true });
              }
            });
          }

          // Click the nav link
          cy.get(`[data-cy-link-id="${linkId}"]`).click({ force: true });

          // Wait for smooth scroll animation (max duration = 700ms)
          cy.wait(800);

          // Verify the target section is visible
          cy.get(`#${sectionId}`).should("be.visible");

          // scroll the section into view to ensure visibility
          cy.get(`#${sectionId}`).scrollIntoView().should("be.visible");
        });
      });
    });
  });
});
