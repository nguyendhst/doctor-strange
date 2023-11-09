-- Add new columns
ALTER TABLE users
ADD COLUMN social_id VARCHAR(20),
ADD COLUMN email VARCHAR(100),
ADD COLUMN phone_number VARCHAR(15),
ADD COLUMN insurance_id VARCHAR(20),
ADD COLUMN dob DATE,
DROP COLUMN age;

-- Table doctors
ALTER TABLE doctors
ADD COLUMN department VARCHAR(100);

-- Table symptoms_doctors
DROP TABLE symptom_doctor;

-- Table symptom_specialization
CREATE TABLE symptom_specialization (
    id SERIAL PRIMARY KEY,
    symptom_id INT REFERENCES symptoms(id),
    doctor_id INT REFERENCES doctors(id)
);


