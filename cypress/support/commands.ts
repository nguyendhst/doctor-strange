/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
beforeEach(() => {
  cy.intercept("GET", "/services/symptoms?search=*").as("searchSymptoms");
  cy.intercept("GET", "/services/doctor/by-symptoms?ids=*&search=*").as(
    "doctorBySymptoms"
  );
});
declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      fillStep1(
        name: string,
        gender: string,
        birthday: string,
        phoneNumber: string
      ): Chainable<void>;
      fillStep2(note: string): Chainable<void>;

      fillInOneSymptom(symptom: string): Chainable<void>;

      step3FindDoctorBySymptom(symptoms: string[]): Chainable<void>;

      getInputByLabel(label: string): Chainable<JQuery<HTMLInputElement>>;
      getAntdInputByLabel(label: string): Chainable<JQuery<HTMLInputElement>>;

      drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>;
      dismiss(
        subject: string,
        options?: Partial<TypeOptions>
      ): Chainable<Element>;
      // visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
    }
  }
}

Cypress.Commands.add("getInputByLabel", (label: string) => {
  return cy.contains("label", label).parent().find("input, textarea");
});

Cypress.Commands.add("getAntdInputByLabel", (label: string) => {
  return cy.contains("label", label).parent().parent().find("input, textarea");
});

export const checkCurrentStep = (step: number) => {
  return cy
    .get("div.ant-steps-item-active")
    .invoke("text")
    .then((text) => {
      console.log(text);
    })
    .should("contain", step);
};

Cypress.Commands.add("login", (username, password) => {
  cy.contains("You haven't logged in yet!");
  cy.contains("Login").click();
  cy.contains("Welcome back").should("be.visible");
  cy.getInputByLabel("Email").type(username);
  cy.getInputByLabel("Password").type(password);
  cy.get("button").contains("Sign In").click();
});

Cypress.Commands.add("fillStep1", (name, gender, birthday, phoneNumber) => {
  checkCurrentStep(1);

  name && cy.getAntdInputByLabel("Your Name").type(name);

  gender && cy.getAntdInputByLabel("Gender").click();
  gender && cy.get(".ant-select-item-option-content").contains("Male").click();

  birthday && cy.getAntdInputByLabel("Your Birthday").click().type(birthday);

  phoneNumber && cy.getAntdInputByLabel("Your Phone Number").type(phoneNumber);

  cy.get("button").contains("Next").click();
});

Cypress.Commands.add("fillStep2", (note) => {
  checkCurrentStep(2);

  note && cy.getAntdInputByLabel("Notes").type(note);

  cy.get("button").contains("Next").click();
});

Cypress.Commands.add("fillInOneSymptom", (symptom) => {
  cy.getAntdInputByLabel("Choose some symptoms").click().type(symptom);
  // Wait for Debounce to happen and API call
  cy.wait(500).wait("@searchSymptoms");
  cy.get(".ant-select-item-option-content").contains(symptom).click();
});

Cypress.Commands.add("step3FindDoctorBySymptom", (symptoms) => {
  cy.visit("/");
  cy.login("hoangkimc93@gmail.com", "123123");
  cy.fillStep1("Hoàng Kim Cương", "Male", "24/12/2002", "0992377733");
  cy.fillStep2("Hello from Cypress!!");

  cy.wait("@searchSymptoms");
  symptoms.forEach((symptom) => {
    cy.fillInOneSymptom(symptom)
  });
});
