import { generateEmail, generatePassword } from "../../utils/accountGenerate";

describe("first flow", () => {
  const email = generateEmail();
  const password = generatePassword();
  it("sign up -> log in -> log out", () => {
    cy.signup(email, password);
    cy.login(email, password);
    cy.logout(email, password);
    cy.contains("button", "Login").should("exist");
  });
});
