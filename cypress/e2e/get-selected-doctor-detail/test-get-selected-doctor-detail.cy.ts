describe('Doctor Detail API', () => {
    const apiUrl = "http://localhost:3000/services/doctor/detail";

    it('should return doctor details by ID', () => {
        const validDoctorId = 1;
        
        cy.request({
            method: 'GET',
            url: `${apiUrl}?id=${validDoctorId}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
        });
    });
        
    it('should not return doctor details by ID', () => {    
        const invalidDoctorId = 10000000; // Invalid ID
        cy.request({
            method: 'GET',
            url: `${apiUrl}?id=${invalidDoctorId}`,
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(404); 
            expect(response.body).to.have.property('statusCode', 404);
        });
    });
});
