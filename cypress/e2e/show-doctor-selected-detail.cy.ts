describe('Doctor Detail API', () => {
    it('should return doctor details by ID', () => {
        const doctorId = 2;

        cy.request({
            method: 'GET',
            url: `/services/doctor/detail?id=${doctorId}`,
        }).then((response) => {
            // Kiểm tra kết quả trả về từ API
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('data');

            // Lấy thông tin bác sĩ từ API
            const doctorData = response.body.data;

            // Kiểm tra từng trường thông tin theo mẫu dữ liệu
            expect(doctorData).to.include({
            id: 2,
            name: "Bob Williams",
            specialization: "Orthopedist",
            contact: "bob.williams@hospital.com",
            rating: 4.7,
            department: "Trung Vuong Hospital"
            });

            // Lấy tên bác sĩ từ dữ liệu API
            const doctorName = doctorData.name;
            expect(doctorName).to.not.be.empty;

            // Gọi hàm showDoctorDetail với danh sách triệu chứng và tên bác sĩ
            cy.showDoctorDetail(["Sprained ankle", "Hot flashes"], doctorName);
        });
    });
});
  