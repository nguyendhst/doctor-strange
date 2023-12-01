import { generateEmail, generatePassword } from "../../utils/accountGenerate";

describe("third flow", () => {
  it("should not allow to sign in after sign up successfully due to wrong password", () => {
    const email = generateEmail();
    const password = generatePassword();
    cy.signup(email, password + "abc");
    cy.login(email, password);
    cy.contains("p", "Could not authenticate user").should("exist");
    cy.contains("button", "Login").should("exist");
  });
});
