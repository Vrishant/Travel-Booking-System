# Frontend-Backend Integration TODO

## Approved Plan Steps:

- [x] Step 1: Backend plain Java compiled successfully (`mvn clean compile` BUILD SUCCESS)
- [x] Step 1.1: pom.xml Spring Boot upgraded (web, jpa, h2, validation)
 - [x] Step 1.2: TravelApplication.java main class created
 - [x] Step 1.3: application.properties (H2 DB, port 8080)
 - [x] Step 1.4: Booking.java @Entity with string refs (no circular deps)
- [x] Step 1.5: CorsConfig for frontend
- [x] Step 3: Frontend deps (npm i axios)
 - [x] Step 4: Update Home.js (fetch services API)
 - [x] Step 5: Update UserDashboard.js (fetch/cancel bookings API)
- [ ] Step 5: Update UserDashboard.js (fetch/cancel bookings API)
- [ ] Step 6: Update AdminDashboard.js (manage services API)
- [ ] Step 7: Backend run `cd backend && mvn spring-boot:run`
- [ ] Step 8: Frontend run `cd frontend && npm start`
- [ ] Step 9: Test full-stack (localhost:8080 API + 3000 UI)
