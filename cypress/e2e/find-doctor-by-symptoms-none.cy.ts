describe("one special symptom provided", () => {
  it("should have 0 doctor returned", () => {
    cy.step3FindDoctorBySymptom(["Hot flashes"]);
    cy.wait("@doctorBySymptoms").then((interception) => {
      const responseBody = interception.response?.body;

      const responseArrayLength = responseBody?.data?.length ?? 0;

      cy.getAntdInputByLabel("Doctor Selection").click().wait(500);

      cy.get(".ant-empty-image")
        .should("exist")
        .then(() => {
          expect(responseArrayLength).to.equal(0);
        });
    });
  });
});
