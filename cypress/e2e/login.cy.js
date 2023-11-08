const correctEmail = "first.last@stud.noroff.no";
const correctPassword = "UzI1NiIsInR5cCI";
const wrongEmail = "wrongEmail@noroff.no";
const wrongPassword = "wrongPassword";

it("should allow a valid user to log in and access their profile", () => {
  cy.visit("/");
  cy.wait(500);
  cy.get("#registerModal").contains("Login").click();
  cy.wait(500);
  cy.get("#loginForm").should("be.visible");
  cy.get("#loginEmail").type(correctEmail);
  cy.get("#loginPassword").type(correctPassword);
  cy.get("button[type=submit]").contains("Login").click();
});

it("should show an error message if the user invalid credentials", () => {
  cy.visit("/");
  cy.wait(500);
  cy.get("#registerModal").contains("Login").click();
  cy.wait(500);
  cy.get("#loginForm").should("be.visible");
  cy.get("#loginEmail").type(wrongEmail);
  cy.get("#loginPassword").type(wrongPassword);
  const expectedAlertText =
    "Either your username was not found or your password is incorrect";
  cy.on("window:alert", (text) => {
    expect(text).to.contains(expectedAlertText);
  });

  // Trigger the alert by attempting to submit the form
  cy.get("button[type=submit]").contains("Login").click();
});
