describe("get appointments", () => {
  it("should login successful", () => {
    const email = "hoangkimc93@gmail.com";
    const password = "123123";

    let htmlElements = [];
    let expectedData: any[] = [];
    const enum shift {
      "MORNING" = "Ca Sáng",
      "AFTERNOON" = "Ca Chiều",
    }

    // Go to Home page
    cy.visit("/");
    cy.login(email, password);
    cy.wait(1000);

    // Test 1: Login successful
    cy.contains(`Hey, ${email}`).should("be.visible");
    cy.contains("Logout").should("be.visible");
    cy.contains("My Appointments").click();
    cy.wait(1000);

    // Test 2: Go to the My appointments page
    cy.url().should("include", "/appointments");
    cy.get("h1").contains("Appointments").should("be.visible");

    // Wait for Appointments to finish loading and get expected data
    cy.wait("@getAppointments").then((interception) => {
      expectedData = interception.response?.body?.data;
    });

    // Get all AppointmentDetail element
    cy.get('a[href^="/appointments#"]')
      .parent()
      .parent()
      .each((element, index) => {
        // Extract appointment information
        const appointmentId = element
          .find('p:contains("Appointment Id")')
          .text()
          .trim();
        const fullname = element.find('p:contains("Fullname")').text().trim();
        const symptoms = element.find('p:contains("Symptoms")').text().trim();
        const doctor = element.find('p:contains("Doctor")').text().trim();
        const department = element
          .find('p:contains("Department")')
          .text()
          .trim();
        const schedule = element.find('p:contains("Schedule")').text().trim();

        // Test
        expect(appointmentId).to.contain(expectedData[index].id);
        expect(fullname).to.contain(expectedData[index].users.name);
        expect(symptoms).to.contain(expectedData[index].symptoms.symptom);
        expect(doctor).to.contain(expectedData[index].doctors.name);
        expect(department).to.contain(expectedData[index].doctors.department);
        expect(schedule).to.contain(
          shift[expectedData[index].shift.toString()]
        );

        // Log the extracted information
        // cy.log("Appointment ID:", appointmentId);
        // cy.log("Fullname:", fullname);
        // cy.log("Symptoms:", symptoms);
        // cy.log("Doctor:", doctor);
        // cy.log("Department:", department);
        // cy.log("Schedule:", schedule);
      });
    // .parent().parent() to get all appointment available and compare
  });
});
