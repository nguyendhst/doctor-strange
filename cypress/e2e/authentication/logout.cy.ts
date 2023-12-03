describe("log out flow", () => {
  const email = "justtona3922@gmail.com";
  const password = "123123";
  it("should log out successfully", () => {
    cy.visit("/");
    cy.login(email, password);
    cy.logout(email, password);
    cy.contains("button", "Login").should("exist");
  });
  it("should log out successfully", () => {
    cy.visit("/");
    cy.login(email, password);
    cy.logout(email, password);
    cy.contains("button", "Login").should("not.have.text", "Logout");
  });
});
