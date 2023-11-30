describe("INTEGRATION: The doctor is fully booked for the morning and free at afternoon.", () => {
    it("should disable the morning option and leave the afternoon one clickable", () => {
        const tomorrowDDMMYYYYFormatted = '31/12/2024';
        const desiredDoctor = {
            name: "Alice Johnson"
        }
        const symptom = 'Headache'

        cy.visit("/");
        cy.login("hoangkimc93@gmail.com", "123123");
        cy.fillStep1("Hoàng Kim Cương", "Male", "24/12/2002", "0992377733");
        cy.fillStep2("Hello from Cypress!!");

        cy.fillInOneSymptom(symptom);
    
        cy.getAntdInputByLabel("Choose your Appointment Date").click().type(tomorrowDDMMYYYYFormatted);

        cy.getAntdInputByLabel("Doctor Selection").click()
        cy.get(".ant-select-item-option-content").contains(desiredDoctor.name).click();
        // Check the "Morning" radio button
        cy.get('input[value="MORNING"]').should('be.disabled');

        // Check the "Afternoon" radio button
        cy.get('input[value="AFTERNOON"]').should('not.be.disabled').click();
        cy.get('input[value="AFTERNOON"]').should('be.checked');
    });
});