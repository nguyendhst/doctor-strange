describe("Visit each step of the form filling process and submit the form", () => {
    it("should be able to submit with valid data and doctors are always available", () => {
        const validSymptoms = ["Sprained ankle"];
        cy.visit("/");
		
        cy.login("hoangkimc93@gmail.com", "123123");

        cy.fillStep1("John Doe", "Male", "24/12/2002", "0992377733");

        cy.fillStep2("Hello from Cypress!!");

        cy.wait("@searchSymptoms");

        cy.getAntdInputByLabel("Choose some symptoms")
            .click()
            .type(validSymptoms[0]);

        cy.wait(500).wait("@searchSymptoms");

        cy.get(".ant-select-item-option-content")
            .contains(validSymptoms[0])
            .click();

        cy.getAntdInputByLabel("Choose your Appointment Date")
            .click()
            .type("24/12/2023");

        cy.getAntdInputByLabel("Doctor Selection").click().wait(500);
        const numDoctors = cy
            .get(".ant-select-item.ant-select-item-option") // Select the doctor elements
            .filter(":visible")
            .its("length");

        // select the first doctor
        cy.get(".ant-select-item.ant-select-item-option")
            .filter(":visible")
            .first()
            .click();

        // select the first time slot: radio button
        // Select Preferred Appointment Time of Day
        // get <label by class="ant-radio-wrapper">
        cy.get("label.ant-radio-wrapper").first().click();

        cy.get("button").contains("Done").click();
    });
});

describe("Visit til step 2 and return to step 1 to edit data", () => {
    it("should be able to edit data", () => {
        const validSymptoms = ["Sprained ankle"];
        cy.visit("/");
        cy.login("hoangkimc93@gmail.com", "123123");

        cy.fillStep1("John Doe", "Male", "24/12/2002", "0992377733");

        cy.get("div.ant-steps-item-active")
            .invoke("text")
            .then((text) => {
                console.log(text);
            })
            .should("contain", 2);

        cy.getAntdInputByLabel("Notes").type("Hello");

        cy.get("button").contains("Previous").click();

        cy.get("div.ant-steps-item-active")
            .invoke("text")
            .then((text) => {
                console.log(text);
            })
            .should("contain", 1);

        cy.getAntdInputByLabel("Your Name").should("have.value", "John Doe");

        cy.contains("label", "Gender")
            .parent()
            .parent()
            .get("span.ant-select-selection-item")
            .invoke("text")
            .should((text) => {
                expect(text).to.equal("Male");
            });

        cy.getAntdInputByLabel("Your Birthday").should(
            "have.value",
            "24/12/2002"
        );

        cy.getAntdInputByLabel("Your Phone Number").should(
            "have.value",
            "0992377733"
        );

        cy.refillStep1("John Lark", "Female", "24/11/2002", "8992377733");

        cy.getAntdInputByLabel("Notes").should("have.value", "Hello");

        cy.get("button").contains("Next").click();

        cy.fillStep3(validSymptoms, "24/12/2023");

        cy.get("button").contains("Done").click();
    });
});

describe("Visit til step 3 and return to step 2 to edit data", () => {
    it("should be able to edit data", () => {
        const validSymptoms = ["Sprained ankle"];
        cy.visit("/");
        cy.login("hoangkimc93@gmail.com", "123123");

        cy.fillStep1("John Doe", "Male", "24/12/2002", "0992377733");

        cy.fillStep2("Hello from Cypress!!");

		cy.fillStep3(validSymptoms, "24/12/2023");

		cy.prevStep();

		cy.getAntdInputByLabel("Notes").should("have.value", "Hello from Cypress!!");

		cy.refillStep2("Hello");

		cy.get("button").contains("Next").click();

		cy.doneStep();

	});

});
