describe("empty string provided", () => {
  it("should return all symptoms", () => {
    cy.stepSearchForSymptom("head");
    cy.request("/services/symptoms?search=").then((response) => {
      const responseBody = response?.body;

      const responseArrayLength = responseBody?.data?.length;

      cy.getAntdInputByLabel("Choose some symptoms").click().wait(500);
      cy.get(".ant-select-item-option-content") // Select the symptom elements
        .its("length") // Get the count of elements from the HTML structure
        .then((htmlCount) => {
          expect(responseArrayLength).to.greaterThan(htmlCount);
        });
    });
  });
});