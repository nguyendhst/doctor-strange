describe("sign up flow", () => {
  const email = "c8d72365683bb5@crankymonkey.info";
  const password = "whoknows";
  before(() => {
    cy.task("creatNewAccount", { email, password });
  });
  it("should sign up successfully", () => {
    cy.signup(email, password);
  });
});
