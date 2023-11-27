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

describe("one symptom provided", () => {
  it("should return some doctors", () => {
    cy.step3FindDoctorBySymptom(["Sprained ankle"]);
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