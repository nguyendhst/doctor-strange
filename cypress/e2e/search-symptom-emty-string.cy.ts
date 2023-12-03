describe("empty string provided", () => {
  it("should return all symptoms", () => {
    cy.stepSearchForSymptom("");
    cy.request("/services/symptoms?search=").then((response) => {
      cy.getAntdInputByLabel("Choose some symptoms").click().wait(500);

      cy.get(".ant-select-item-option-content") // Select the doctor elements
        .its("length") // Get the count of elements from the HTML structure
        .then((htmlCount) => {
          expect(htmlCount).to.greaterThan(0);
        });
    });
  });
});