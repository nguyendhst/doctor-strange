import {
  generateEmail,
  generatePassword,
} from "../../../utils/accountGenerate";

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
describe("second flow", () => {
  it("should not allow to sign up due to existing email", () => {
    cy.signup("justtona3922@gmail.com", "123456789");
    cy.contains("p", "This email was already signed up").should("exist");
  });
});
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
describe("fourth flow", () => {
  const email = generateEmail();
  const password = generatePassword();
  it("should not login due to account not exist", () => {
    cy.visit("/");
    cy.login(email, password);
    cy.contains("button", "Login").should("exist");
  });
});
