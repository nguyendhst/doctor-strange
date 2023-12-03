
describe("multi symptoms", () => {
  it("should return some doctors", () => {
    cy.step3FindDoctorBySymptom(["Sprained ankle", "Hot flashes"]);
    cy.wait("@doctorBySymptoms").then((interception) => {
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
});