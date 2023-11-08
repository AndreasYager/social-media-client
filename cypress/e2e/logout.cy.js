const correctEmail = "first.last@stud.noroff.no";
const correctPassword = "UzI1NiIsInR5cCI";

it("should allow a valid user to log out", () => {
  cy.visit("/");
  cy.wait(500);
  cy.get("#registerModal").contains("Login").click();
  cy.wait(500);
  cy.get("#loginForm").should("be.visible");
  cy.get("#loginEmail").type(correctEmail);
  cy.get("#loginPassword").type(correctPassword);
  cy.get("button[type=submit]").contains("Login").click();
  cy.wait(500);
  cy.get("button[data-auth=logout]").contains("Logout").click();
});
