import { generatePassword, generateEmail } from "../../utils/accountGenerate";

describe("fourth flow", () => {
  const email = generateEmail();
  const password = generatePassword();
  it("should not login due to account not exist", () => {
    cy.visit("/");
    cy.login(email, password);
    cy.contains("button", "Login").should("exist");
  });
});
