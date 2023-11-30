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
  const password = "whoknows";
  before(() => {
    cy.task("creatNewAccount", { email, password });
  });
  it("should sign up successfully", () => {
    cy.signup(email, password);
  });
});
