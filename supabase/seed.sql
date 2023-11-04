INSERT INTO users (name, age, gender, contact) VALUES
('John Doe', 30, 'Male', 'john.doe@example.com'),
('Jane Smith', 25, 'Female', 'jane.smith@example.com');

INSERT INTO symptoms (user_id, symptom, notes) VALUES
(1, 'Headache', 'Started this morning, mild but persistent.'),
(2, 'Sprained ankle', 'Tripped on stairs, severe pain.');

INSERT INTO doctors (name, specialization, contact, rating) VALUES
('Dr. Alice Johnson', 'Neurologist', 'alice.johnson@hospital.com', 4.5),
('Dr. Bob Williams', 'Orthopedist', 'bob.williams@hospital.com', 4.7);

INSERT INTO recommendations (user_id, doctor_id, symptom_id) VALUES
(1, 1, 1),
(2, 2, 2);
