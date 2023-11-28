describe("get appointments", () => {
  it("should see appointments", () => {
    const email = "hoangkimc93@gmail.com";
    const password = "123123";

    let expectedData: any[] = [];

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

    // Get all Appointments list
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

        // Test 3: Match data between response data and UI
        expect(appointmentId).to.contain(expectedData[index]?.id || "---");
        expect(fullname).to.contain(expectedData[index]?.users.name || "---");
        expect(symptoms).to.contain(expectedData[index]?.symptoms.symptom || "---");
        expect(doctor).to.contain(expectedData[index]?.doctors.name || "---");
        expect(department).to.contain(expectedData[index]?.doctors.department || "---");
        expect(schedule).to.contain(
          expectedData[index].shift.toString() == "MORNING"
            ? "Ca Sáng"
            : "Ca Chiều"
        );

        const time = new Date(expectedData[index].recommendation_time);
        const expectedTime = time.toLocaleString("vi-VN", {
          dateStyle: "full",
        });

        expect(schedule).to.contain(expectedTime);
      });
  });
  it("should see appointments", () => {
    const email = "khoa.caotrananh@hcmut.edu.vn";
    const password = "123456";

    let expectedData: any[] = [];

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
        expect(appointmentId).to.contain(expectedData[index]?.id || "---");
        expect(fullname).to.contain(expectedData[index]?.users.name || "---");
        expect(symptoms).to.contain(expectedData[index]?.symptoms.symptom || "---");
        expect(doctor).to.contain(expectedData[index]?.doctors.name || "---");
        expect(department).to.contain(expectedData[index]?.doctors.department || "---");
        expect(schedule).to.contain(
          expectedData[index].shift.toString() == "MORNING"
            ? "Ca Sáng"
            : "Ca Chiều"
        );

        const time = new Date(expectedData[index].recommendation_time);
        const expectedTime = time.toLocaleString("vi-VN", {
          dateStyle: "full",
        });

        expect(schedule).to.contain(expectedTime);
      });
  });
  it("should see no data", () => {
    const email = "caokhoa7a7@gmail.com";
    const password = "123456";

    let expectedData: any[] = [];

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

    // Test 3: Get "No data"
    cy.contains("No data").should("be.visible")
  })
});
