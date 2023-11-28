describe("existing symptom keyword provided", () => {
  it("should return symptoms matching provided keyword", () => {
    cy.stepSearchForSymptom("head");
    cy.wait("@searchSymptoms").then((interception) => {
      const responseBody = interception.response?.body;

      const responseArrayLength = responseBody?.data?.length ?? 0;

      expect(responseArrayLength).to.greaterThan(0);
    });
  });
});