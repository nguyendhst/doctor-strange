import { configure } from 'urlcat';

const urlcat = configure({ arrayFormat: 'repeat' });

describe("api-test, 1 symptom", () => {
  it("should return doctors that can cured symptom 1 (for Headache)", () => {
    const API_URL = "/services/doctor/by-symptoms";
    const SEARCH_PARAMS = {
      ids: [1],
      search: "",
    };
    cy.request("GET", urlcat(API_URL, SEARCH_PARAMS)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
    });
  });

  it("should return doctors that can cured symptom 1 (for Headache), whose name contains searchString 'li'", () => {
    const API_URL = "/services/doctor/by-symptoms";
    const SEARCH_PARAMS = {
      ids: [1],
      search: "li",
    };
    cy.request("GET", urlcat(API_URL, SEARCH_PARAMS)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
      response.body.data?.map((doctor: { name: string }) => {
        expect(doctor.name).to.contain(SEARCH_PARAMS.search);
      });
    });
  });

  it("no doctor can cured symptom 46 (for Hot flashes)", () => {
    const API_URL = "/services/doctor/by-symptoms";
    const SEARCH_PARAMS = {
      ids: [46],
      search: "",
    };
    cy.request("GET", urlcat(API_URL, SEARCH_PARAMS)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.null;
    });
  });
});
