describe("one special symptom provided", () => {
  it("should have 0 doctor returned", () => {
    cy.step3FindDoctorBySymptom(["Hot flashes"]);
    cy.get("@doctorBySymptoms.all") // this will get all intercepted requests
      .invoke("at", -1) // intercept latest api call
      .then((interception) => {
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
