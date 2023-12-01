const generateEmail = () => {
  var chars = "abcdefghijklmnopqrstuvwxyz1234567890";
  var myemail = "";
  for (let i = 0; i < 15; i++) {
    myemail += chars[Math.floor(Math.random() * chars.length)];
  }
  myemail += "@gmail.com";
  return myemail;
};

describe("sign up flow", () => {
  const email = generateEmail();
  const newemail = generateEmail();
  const password = "whoknows";
  before(() => {
    cy.task("creatNewAccount", { email, password });
  });
  it("should not allow to sign up due to existing email", () => {
    cy.signup("justtona3922@gmail.com", "123123");
    cy.contains("p", "This email was already signed up").should("exist");
  });
  it("should sign up successfully", () => {
    cy.signup(email, password);
    cy.login(email, password);
    cy.contains("button", "Logout").should("exist");
  });
  // it("should not allow to sign up due to wrong password", () => {
  //   cy.signup(newemail, password + "abc");
  //   cy.login(newemail, password);
  //   cy.contains("p", "Could not authenticate user").should("exist");
  //   cy.contains("button", "Login").should("exist");
  // });
});
