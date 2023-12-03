import {
  generateEmail,
  generatePassword,
} from "../../../utils/accountGenerate";

describe("sign up flow", () => {
  const email = generateEmail();
  const newemail = generateEmail();
  const password = generatePassword();
  it("should sign up successfully", () => {
    cy.signup(email, password);
    cy.login(email, password);
    cy.contains("button", "Logout").should("exist");
  });
  it("should not allow to sign up due to existing email", () => {
    cy.signup(email, password);
    cy.contains("p", "This email was already signed up").should("exist");
  });
  it("should not allow to sign up due to wrong password", () => {
    cy.signup(newemail, password + "abc");
    cy.login(newemail, password);
    cy.contains("p", "Could not authenticate user").should("exist");
    cy.contains("button", "Login").should("exist");
  });
});
