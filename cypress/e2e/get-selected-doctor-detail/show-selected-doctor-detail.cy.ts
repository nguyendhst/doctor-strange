import { configure } from 'urlcat';

const urlcat = configure({ arrayFormat: 'repeat' });

describe('Doctor Detail API', () => {
    it('should return doctor details by ID', () => {
        const doctorId = 1;

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
                "id": 1,
                "name": "Alice Johnson",
                "specialization": "Neurologist",
                "contact": "alice.johnson@hospital.com",
                "rating": 4.5,
                "department": "Trung Vuong Hospital"
            });

            // Lấy tên bác sĩ từ dữ liệu API
            const doctorName = doctorData.name;
            expect(doctorName).to.not.be.empty;

            // Gọi hàm showDoctorDetail với danh sách triệu chứng và tên bác sĩ
            cy.showDoctorDetail(["Headache"], doctorName);
        });
    });

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

    it('should return random doctor details with no symptom', () => {
        const API_URL = "/services/doctor/by-symptoms";
        const SEARCH_PARAMS = {
            ids: [],
            search: "li",
        };

        interface Doctor {
            id: number;
            name: string;
            specialization: string;
            contact: string;
            rating: number;
            department: string;
        }

        interface ApiResponse {
            statusCode: number;
            data: Doctor[];
        }

        // Gọi API để lấy danh sách bác sĩ dựa trên triệu chứng
        cy.request("GET", urlcat(API_URL, SEARCH_PARAMS)).then((response) => {
            // Kiểm tra kết quả trả về từ API
            expect(response.status).to.eq(200);

            // Chuyển đổi chuỗi JSON thành đối tượng TypeScript
            const responseData: ApiResponse = response.body;

            // Chọn ngẫu nhiên một bác sĩ từ danh sách
            const randomDoctor = responseData.data[Math.floor(Math.random() * responseData.data.length)];

            // Gọi API để lấy chi tiết của bác sĩ ngẫu nhiên
            cy.request({
                method: 'GET',
                url: `/services/doctor/detail?id=${randomDoctor.id}`,
            }).then((response) => {
                // Kiểm tra kết quả trả về từ API
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('data');

                // Lấy thông tin bác sĩ từ API
                const doctorData = response.body.data;

                // Lấy tên bác sĩ từ dữ liệu API
                const doctorName = doctorData.name;
                expect(doctorName).to.not.be.empty;

                // Gọi hàm showDoctorDetail với danh sách triệu chứng và tên bác sĩ
                cy.showDoctorDetail([], doctorName);
            });
        });
    });
});

