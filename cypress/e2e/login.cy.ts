describe("login flow", () => {
  it("should login successfully", () => {
    cy.visit("/");
    cy.login("justtona3922@gmail.com", "123123");
    cy.contains("button", "Logout").should("exist");
  });
  it("should not login", () => {
    cy.visit("/");
    cy.login("justtona3922@gmail.com", "123456");
    cy.contains("button", "Login").should("exist");
  });
});
