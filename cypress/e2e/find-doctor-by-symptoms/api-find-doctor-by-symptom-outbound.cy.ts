import { configure } from 'urlcat';

const urlcat = configure({ arrayFormat: 'repeat' });

describe("api-test, invalid symptom range", () => {
  it("should return no doctors", () => {
    const API_URL = "/services/doctor/by-symptoms";
    const SEARCH_PARAMS = {
      ids: [9999],
      search: "",
    };
    cy.request("GET", urlcat(API_URL, SEARCH_PARAMS)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.null;
    });
  });

  it("should return some doctors containing searchString", () => {
    const API_URL = "/services/doctor/by-symptoms";
    const SEARCH_PARAMS = {
      ids: [9999],
      search: "William",
    };
    cy.request("GET", urlcat(API_URL, SEARCH_PARAMS)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.null;
    });
  });
});
