

describe('Doctor Detail API', () => {
    it('should return doctor details by ID', () => {
        const doctorId = 2;

        cy.request({
            method: 'GET',
            url: `/services/doctor/detail?id=${doctorId}`,
        }).then((response) => {
            const doctorName = response.body.data.name;
            expect(doctorName).to.not.be.empty;
            
            cy.showDoctorDetail(["Sprained ankle", "Hot flashes"], doctorName);

            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');
        });
    });
});
  