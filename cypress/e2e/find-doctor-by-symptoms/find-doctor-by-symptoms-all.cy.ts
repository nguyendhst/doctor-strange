describe("no symptom provided", () => {
  it("should return all doctors", () => {
    cy.step3FindDoctorBySymptom([]);
    cy.request("/services/doctor/by-symptoms?search=").then((response) => {
      const responseBody = response?.body;

      const responseArrayLength = responseBody?.data?.length;

      cy.getAntdInputByLabel("Doctor Selection").click().wait(500);
      cy.get(".ant-select-item-option-content") // Select the doctor elements
        .its("length") // Get the count of elements from the HTML structure
        .then((htmlCount) => {
          expect(responseArrayLength).to.greaterThan(htmlCount);
        });
    });
  });
});
