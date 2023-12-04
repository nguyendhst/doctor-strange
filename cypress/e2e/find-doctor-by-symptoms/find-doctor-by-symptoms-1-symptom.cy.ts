describe("one symptom provided", () => {
  it("should return some doctors", () => {
    cy.step3FindDoctorBySymptom(["Sprained ankle"]);

    cy.get("@doctorBySymptoms.all") // this will get all intercepted requests
      .invoke("at", -1) // intercept latest api call
      .then((interception) => {
        const responseBody = interception.response?.body;

        const responseArrayLength = responseBody?.data?.length;

        cy.getAntdInputByLabel("Doctor Selection").click().wait(500);
        cy.get(".ant-select-item.ant-select-item-option") // Select the doctor elements
          .filter(":visible")
          .its("length") // Get the count of elements from the HTML structure
          .then((htmlCount) => {
            expect(responseArrayLength).to.equal(htmlCount);
          });
      });
  });
  it("should return some doctors contain searchString", () => {
    const SEARCH_STRING = "Bob";

    cy.step3FindDoctorBySymptom(["Sprained ankle"]);

    cy.getAntdInputByLabel("Doctor Selection").click().type(SEARCH_STRING);
    cy.wait(500).wait("@doctorBySymptoms");

    cy.get("@doctorBySymptoms.all") // this will get all intercepted requests
      .invoke("at", -1) // intercept latest api call
      .then((interception) => {
        const responseBody = interception.response?.body;

        const responseArrayLength = responseBody?.data?.length;

        cy.getAntdInputByLabel("Doctor Selection").click().wait(500);
        cy.get(".ant-select-item.ant-select-item-option") // Select the doctor elements
          .filter(":visible")
          .each((element) => {
            const doctorName = element.find("div").text().trim();
            expect(doctorName).contain(SEARCH_STRING);
          })
          .its("length") // Get the count of elements from the HTML structure
          .then((htmlCount) => {
            expect(responseArrayLength).to.equal(htmlCount);
          });
      });
  });
});
