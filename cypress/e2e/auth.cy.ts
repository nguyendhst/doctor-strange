// cypress/integration/login.spec.js

describe('Authentication API', () => {
    it('should not return data if not authenticated', () => {
      cy.request({
        method: 'POST',
        url: '/api/appointments',
        body: {
          email: "mountngubinh@gmail.com",
        },
        failOnStatusCode: false, // Allows the test to continue even if the request fails
      }).then((response) => {
        expect(response.status).to.equal(403);
      });
    });
  
    it('should login successfully with data existed in db', () => {
      const email = "quynhnhu.9a3.2016@gmail.com";
      const password = "000000";
  
      // Go to Home page
      cy.visit("/");
      cy.login(email, password);
      cy.wait(1000);
  
      // Login successful
      cy.contains(`Hey, ${email}`).should("be.visible");
    });
  
    it('should login unsuccessfully with wrong password', () => {
      const email = "mountngubinh@gmail.com";
      const password = "000000";
  
      // Go to Home page
      cy.visit("/");
      cy.login(email, password);
  
      // Login failed
      cy.contains("Could not authenticate user").should("be.visible");
    });
});

describe('Post form', () => {
  it('should post form unsuccessfully if not authenticated', () => {
    const body = {
      birthday: '05/10/2002',
      email: 'quynhnhu.9a3.2016@gmail.com',
      gender: 'Female',
      name: 'Nhu',
      notes: undefined,
      phone: 'h',
      symptom: undefined,
      doctor: 'string',
      date: Date,
      shift: '',
    }
    cy.request({
      method: 'POST',
      url: '/services/form/submit',
      body: body,
      failOnStatusCode: false, // Allows the test to continue even if the request fails
    }).then((response) => {
      expect(response.status).to.equal(403);
    });
  })
});