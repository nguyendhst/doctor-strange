import request from "umi-request"

/*
  Author: Thuanbkk20

  This test file covers the testing of Searching symptom.
*/
describe("Fetch Sympstom API", () => {

  it("Should return sympstom by id if existing id provided and search keyword not provided", async () => {
    const id = 1;
    const response = await request.get(`http://localhost:3000/services/symptoms?id=${id}`);
    expect(response).not.toBeNull();
    expect(response.statusCode).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.length).toBeGreaterThan(0);
    if(response.data.length>0){
      const symptom = response.data[0];
      expect(symptom).toHaveProperty('id', id);
    }
  })

  it("Should return sympstom by id if existing id provided and valid search keyword provided", async () => {
    const id = 1;
    const search = "Fever";
    const response = await request.get(`http://localhost:3000/services/symptoms?id=${id}&search=${search}`);
    expect(response).not.toBeNull();
    expect(response.statusCode).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.length).toBeGreaterThan(0);
    if(response.data.length>0){
      const symptom = response.data[0];
      expect(symptom).toHaveProperty('id', id);
    }
  })

  it("Should return sympstom by id if existing id provided and invalid search keyword provided", async () => {
    const id = 1;
    const search = "I feel bad";
    const response = await request.get(`http://localhost:3000/services/symptoms?id=${id}&search=${search}`);
    expect(response).not.toBeNull();
    expect(response.statusCode).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.length).toBeGreaterThan(0);
    if(response.data.length>0){
      const symptom = response.data[0];
      expect(symptom).toHaveProperty('id', id);
    }
  })

  it("Should not return sympstom with non-existing id provided and search keyword not provided", async () => {
    const id = 10000000;
    const response = await request.get(`http://localhost:3000/services/symptoms?id=${id}`);
    expect(response).not.toBeNull();
    expect(response.statusCode).toBe(404);
    expect(response.data).toBeNull();
  })

  it("Should not return sympstom with non-existing id provided and valid search keyword provided", async () => {
    const id = 10000000;
    const search = "Fever";
    const response = await request.get(`http://localhost:3000/services/symptoms?id=${id}&search=${search}`);
    expect(response).not.toBeNull();
    expect(response.statusCode).toBe(404);
    expect(response.data).toBeNull();
  })

  it("Should not return sympstom with non-existing id provided and invalid search keyword provided", async () => {
    const id = 10000000;
    const search = "I feel bad";
    const response = await request.get(`http://localhost:3000/services/symptoms?id=${id}&search=${search}`);
    expect(response).not.toBeNull();
    expect(response.statusCode).toBe(404);
    expect(response.data).toBeNull();
  })

  it("Should return all sympstom existing in database if id and search keyword not provided", async () => {
    const response = await request.get('http://localhost:3000/services/symptoms');
    expect(response).not.toBeNull();
    expect(response.statusCode).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.length).toBeGreaterThan(0);
  })

  it("Should return suitable sympstoms if id not provided and valid search keyword is provided", async () => {
    const search = "Fever";
    const response = await request.get(`http://localhost:3000/services/symptoms?search=${search}`);
    expect(response).not.toBeNull();
    expect(response.statusCode).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.length).toBeGreaterThan(0);
    if(response.data.length>0){
      for(let symptom of response.data){
        // Check if the response value matches with search param
        const isMatch = symptom.symptom.includes(search);
        expect(isMatch).toBeTruthy();
      }
    }
  })

  it("Should not return sympstom if id not provided and invalid search keyword is provided", async () => {
    const search = "I feel bad";
    const response = await request.get(`http://localhost:3000/services/symptoms?search=${search}`);
    expect(response.statusCode).toBe(404);
    expect(response.body).toBeUndefined();
  })
})