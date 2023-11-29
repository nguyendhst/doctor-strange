describe("existing symptom keyword provided", () => {
  it("should return symptoms matching provided keyword", () => {
    const keyword = "ache";
    cy.stepSearchForSymptom(keyword);
    cy.request(`/services/symptoms?search=${keyword}`).then((response) => {
      cy.getAntdInputByLabel("Choose some symptoms").click().wait(500);
      //Get the symptom elements and expect symptom elements to contain the given keyword
      cy.get('.ant-select-item-option-content').each((item, index, list)=>{
        expect(Cypress.$(item).text()).to.contain(keyword);
      })
    });
  });
});