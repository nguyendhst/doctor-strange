describe("User doesn't provide sufficient information", () => {
    it("should disable both shifts when there's no appointment date", () => {
        const desiredDoctor = {
            name: "Alice Johnson"
        }
        const symptom = 'Headache'

        cy.visit("/");
        cy.login("hoangkimc93@gmail.com", "123123");
        cy.fillStep1("Hoàng Kim Cương", "Male", "24/12/2002", "0992377733");
        cy.fillStep2("Hello from Cypress!!");

        cy.fillInOneSymptom(symptom);
    
        cy.getAntdInputByLabel("Doctor Selection").click();
        cy.get(".ant-select-item-option-content").contains(desiredDoctor.name).click();
        // Check the "Morning" radio button
        cy.get('input[value="MORNING"]').should('be.disabled');

        // Check the "Afternoon" radio button
        cy.get('input[value="MORNING"]').should('be.disabled');
    });
    it("should disable both shifts when there's no doctor", () => {
        const testDateDDMMYYYYFormatted = '28/12/2024';

        cy.visit("/");
        cy.login("hoangkimc93@gmail.com", "123123");
        cy.fillStep1("Hoàng Kim Cương", "Male", "24/12/2002", "0992377733");
        cy.fillStep2("Hello from Cypress!!");

        cy.getAntdInputByLabel("Choose your Appointment Date").click().type(testDateDDMMYYYYFormatted);

        // Check the "Morning" radio button
        cy.get('input[value="MORNING"]').should('be.disabled');

        // Check the "Afternoon" radio button
        cy.get('input[value="MORNING"]').should('be.disabled');
    });
    it("should disable both shifts when neither the doctor nor the appointment date is provided", () => {
        cy.visit("/");
        cy.login("hoangkimc93@gmail.com", "123123");
        cy.fillStep1("Hoàng Kim Cương", "Male", "24/12/2002", "0992377733");
        cy.fillStep2("Hello from Cypress!!");

        // Check the "Morning" radio button
        cy.get('input[value="MORNING"]').should('be.disabled');

        // Check the "Afternoon" radio button
        cy.get('input[value="MORNING"]').should('be.disabled');
    });
});