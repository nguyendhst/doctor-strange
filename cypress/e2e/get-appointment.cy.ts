describe("get appointments", () => {
    it("should login successful", () => {
        const email = "hoangkimc93@gmail.com"
        const password = "123123"

        let htmlElements = [];

        // Go to Home page
        cy.visit("/")
        cy.login(email, password)
        cy.wait(1000)
        
        // Test 1: Login successful
        cy.contains(`Hey, ${email}`).should("be.visible");
        cy.contains("Logout").should("be.visible");
        cy.contains("My Appointments").click()
        cy.wait(1000)

        // Test 2: Go to the My appointments page
        cy.url().should("include", "/appointments")
        cy.get("h1").contains("Appointments").should("be.visible");
        // Wait for Appointments to finish loading
        cy.wait('@getAppointments').wait(500)
        cy.get('a[href^="/appointments#"]').then(
            // TO DO: it will pass in some html ele, get its info and assign it to list
            (something: any) => {
                // Implementation goes here
                console.log(something);
            })
        // .parent().parent()
        
        // TO DO: intercept @getAppointments 
        // to get all appointment available and compare
        
    })
})