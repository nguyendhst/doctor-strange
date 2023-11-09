CREATE TABLE symptom_doctor (
    id SERIAL PRIMARY KEY,
    symptom_id INT REFERENCES symptoms(id),
    doctor_id INT REFERENCES doctors(id)
);
