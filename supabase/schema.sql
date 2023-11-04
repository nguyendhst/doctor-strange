CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    gender VARCHAR(10),
    contact VARCHAR(100)
);

CREATE TABLE symptoms (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    symptom VARCHAR(100),
    report_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    notes TEXT
); 

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    specialization VARCHAR(100),
    contact VARCHAR(100),
    rating FLOAT
);

CREATE TABLE recommendations (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    doctor_id INT REFERENCES doctors(id),
    symptom_id INT REFERENCES symptoms(id),
    recommendation_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
