describe("The doctor is available for 2 shifts", () => {
	it("should display 2 shift options", () => {
        const testDateDDMMYYYYFormatted = '28/12/2024';
        const desiredDoctor = {
            name: "Alice Johnson"
        }
        const symptom = 'Headache'

        cy.visit("/");
        cy.login("hoangkimc93@gmail.com", "123123");
        cy.fillStep1("Hoàng Kim Cương", "Male", "24/12/2002", "0992377733");
        cy.fillStep2("Hello from Cypress!!");

        cy.fillInOneSymptom(symptom);
    
        cy.getAntdInputByLabel("Choose your Appointment Date").click().type(testDateDDMMYYYYFormatted);

        cy.getAntdInputByLabel("Doctor Selection").click();
        cy.get(".ant-select-item-option-content").contains(desiredDoctor.name).click();
        
		// Check the "Morning" radio button
		cy.get('input[value="MORNING"]').should('not.be.disabled').click();
		cy.get('input[value="MORNING"]').should('be.checked');

		// Check the "Afternoon" radio button
		cy.get('input[value="AFTERNOON"]').should('not.be.disabled').click();
		cy.get('input[value="AFTERNOON"]').should('be.checked');
	});
});