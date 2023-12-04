import { configure } from 'urlcat';

const urlcat = configure({ arrayFormat: 'repeat' });

describe("api-test, 0 symptom", () => {
  it("should return all doctors", () => {
    const API_URL = "/services/doctor/by-symptoms";
    const SEARCH_PARAMS = {
      ids: [],
      search: "",
    };
    cy.request("GET", urlcat(API_URL, SEARCH_PARAMS)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
    });
  });

  it("should return all doctors containing searchString", () => {
    const API_URL = "/services/doctor/by-symptoms";
    const SEARCH_PARAMS = {
      ids: [],
      search: "William",
    };
    cy.request("GET", urlcat(API_URL, SEARCH_PARAMS)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
      response.body.data?.map((doctor: { name: string }) => {
        expect(doctor.name).to.contain(SEARCH_PARAMS.search);
      });
    });
  });
});
