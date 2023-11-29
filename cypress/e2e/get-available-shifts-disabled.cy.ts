import { getFormattedDate } from '../support/utils'

describe("doctor is unavailable for the morning", () => {
    it("should disable the morning option", () => {
        // Get tomorrow's date
        const tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        // Format tomorrow's date as "DD/MM/YYYY"
        const tomorrowDDMMYYYYFormatted = getFormattedDate(tomorrow);
        // Format tomorrow's date as "MM/DD/YYYY"
        const tomorrowMMDDYYYYFormatted = getFormattedDate(tomorrow, 'MM/DD/YYYY');

        const desiredDoctor = {
            id: 6,
            name: "Michael Johnson"
        }
        cy.intercept({
            method: 'GET',
            pathname: `/services/doctor/schedule`,
            query: {
                id: desiredDoctor.id.toString(),
                date: new Date(tomorrowMMDDYYYYFormatted).getTime().toString()
            }
        }, { fixture: 'unavailable-morning.json' });
        cy.visit("/");
        cy.login("hoangkimc93@gmail.com", "123123");
        cy.fillStep1("Hoàng Kim Cương", "Male", "24/12/2002", "0992377733");
        cy.fillStep2("Hello from Cypress!!");

        cy.getAntdInputByLabel("Choose your Appointment Date").click().type(tomorrowDDMMYYYYFormatted);

        cy.getAntdInputByLabel("Doctor Selection").click()
        cy.get(".ant-select-item-option-content").contains(desiredDoctor.name).click();
        // Check the "Morning" radio button
        cy.get('input[value="MORNING"]').should('be.disabled');
    });
});