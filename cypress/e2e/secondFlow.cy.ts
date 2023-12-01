describe("second flow", () => {
  it("should not allow to sign up due to existing email", () => {
    cy.signup("justtona3922@gmail.com", "123456789");
    cy.contains("p", "This email was already signed up").should("exist");
  });
});
