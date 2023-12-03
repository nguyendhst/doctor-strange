

describe("not existing symptom keyword provided", () => {
  it("should return no symptom", () => {
    const keyword = "I feel bad";
    cy.stepSearchForSymptom(keyword);
    cy.request(`/services/symptoms?search=${keyword}`).then((response) => {
      cy.getAntdInputByLabel("Choose some symptoms").click().wait(500);
      cy.get(".ant-empty-description").should('have.text', 'No data')
    });
  });
});