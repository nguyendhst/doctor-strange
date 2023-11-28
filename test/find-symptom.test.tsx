import { render, screen } from "@testing-library/react";
import request from "umi-request"
import BookingDate from "@/components/FormSteps/BookingDate";

/*
  Author: Thuanbkk20

  This test file covers the testing of Searching symptom.
*/
describe("Fetch Sympstom API", () => {
  it("Should return all sympstom existing in database", async () => {
    const response = await request.get('http://localhost:3000/services/symptoms');
    expect(response).not.toBeNull();
    expect(response.statusCode).toBe(200);
    expect(response.data).toBeDefined();
    expect(response.data.length).toBeGreaterThan(0);
  })

  it("Should return sympstom by id", async () => {
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

  it("Should return sympstoms with valid search param", async () => {
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

  it("Should not return sympstom with invalid search param", async () => {
    const search = "Lorem ipsum";
    const response = await request.get(`http://localhost:3000/services/symptoms?search=${search}`);
    expect(response.statusCode).toBe(404);
    expect(response.body).toBeUndefined();
  })
})