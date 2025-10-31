import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents() {
      // implement node event listeners here
      // no node events yet
    },
    specPattern: "cypress/e2e/**/*.cy.{js,ts}",
  },
});
