import { configure } from "urlcat";

const urlcat = configure({ arrayFormat: "repeat" });

describe("api-test, 2 symptoms", () => {
  it("should return doctors that can cured symptom 1 and 2", () => {
    const API_URL = "/services/doctor/by-symptoms";
    const SEARCH_PARAMS = {
      ids: [1, 5],
      search: "",
    };

    let crossCheckArray: any[] = [];

    SEARCH_PARAMS.ids.map((_, index) =>
      cy
        .request(
          "GET",
          urlcat(API_URL, { ...SEARCH_PARAMS, ids: SEARCH_PARAMS.ids[index] })
        )
        .then((response) => crossCheckArray.push(...(response.body.data ?? [])))
    );

    crossCheckArray = Array.from(
      new Set(crossCheckArray.map((item: any) => item.id))
    );

    cy.request("GET", urlcat(API_URL, SEARCH_PARAMS)).then((response) => {
      expect(response.status).to.equal(200);
      crossCheckArray.sort((a: any, b: any) => a.id - b.id);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
      expect(response.body.data).to.eql(crossCheckArray);
    });
  });

  it("should return doctors that can cured symptom 1 and 2, whose name contains searchString 'li'", () => {
    const API_URL = "/services/doctor/by-symptoms";
    const SEARCH_PARAMS = {
      ids: [1, 5],
      search: "li",
    };

    let crossCheckArray: any[] = [];

    SEARCH_PARAMS.ids.map((_, index) =>
      cy
        .request(
          "GET",
          urlcat(API_URL, { ...SEARCH_PARAMS, ids: SEARCH_PARAMS.ids[index] })
        )
        .then((response) => crossCheckArray.push(...(response.body.data ?? [])))
    );

    crossCheckArray = Array.from(
      new Set(crossCheckArray.map((item: any) => item.id))
    );

    cy.request("GET", urlcat(API_URL, SEARCH_PARAMS)).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
      response.body.data?.map((doctor: { name: string }) => {
        expect(doctor.name).to.contain(SEARCH_PARAMS.search);
      });
      expect(response.body.data).to.eql(crossCheckArray);
    });
  });
});
