/*
  Author: Thuanbkk20

  This test file covers the testing of Searching symptom.
*/
describe("Fetch Symptom API", () => {
  const apiUrl = "http://localhost:3000/services/symptoms";

  it("Should return symptom by id if existing id provided and search keyword not provided", () => {
    const id = 1;

    cy.request(`GET`, `${apiUrl}?id=${id}`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
      const symptom = response.body.data[0];
      expect(symptom.id).to.equal(id);
    });
  });

  it("Should return symptom by id if existing id provided and valid search keyword provided", () => {
    const id = 1;
    const search = "Fever";

    cy.request(`GET`, `${apiUrl}?id=${id}&search=${search}`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
      const symptom = response.body.data[0];
      expect(symptom.id).to.equal(id);
    });
  });

  it("Should return symptom by id if existing id provided and valid search keyword provided", () => {
    const id = 1;
    const search = "I feel bad";

    cy.request(`GET`, `${apiUrl}?id=${id}&search=${search}`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
      const symptom = response.body.data[0];
      expect(symptom.id).to.equal(id);
    });
  });

  it("Should not return symptom with non-existing id provided and search keyword not provided", () => {
    const id = 10000000;

    cy.request(`GET`, `${apiUrl}?id=${id}`).then((response) => {
      expect(response.body.statusCode).to.equal(404);
      expect(response.body.data).to.be.null;
    });
  });

  it("Should not return symptom with non-existing id provided and valid search keyword provided", () => {
    const id = 10000000;
    const search = "Fever";

    cy.request(`GET`, `${apiUrl}?id=${id}&search=${search}`).then((response) => {
      expect(response.body.statusCode).to.equal(404);
      expect(response.body.data).to.be.null;
    });
  });

  it("Should not return symptom with non-existing id provided and valid search keyword provided", () => {
    const id = 10000000;
    const search = "I feel bad";

    cy.request(`GET`, `${apiUrl}?id=${id}&search=${search}`).then((response) => {
      expect(response.body.statusCode).to.equal(404);
      expect(response.body.data).to.be.null;
    });
  });

  it("Should return all symptoms existing in the database if id and search keyword not provided", () => {
    cy.request(`GET`, apiUrl).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
    });
  });

  it("Should return suitable symptoms if id not provided and valid search keyword is provided", () => {
    const search = "Fever";

    cy.request(`GET`, `${apiUrl}?search=${search}`).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data).to.be.an("array").and.not.to.be.empty;
      response.body.data.forEach((symptom: any) => {
        expect(symptom.symptom.includes(search)).to.be.true;
      });
    });
  });

  it("Should not return symptom if id not provided and invalid search keyword is provided", () => {
    const search = "I feel bad";

    cy.request(`GET`, `${apiUrl}?search=${search}`).then((response) => {
      expect(response.body.statusCode).to.equal(404);
      expect(response.body.data).to.be.null;
    });
  });
});