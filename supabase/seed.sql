INSERT INTO users (name, age, gender, contact)
VALUES ('John Doe', 30, 'Male', 'john.doe@example.com'),
    (
        'Jane Smith',
        25,
        'Female',
        'jane.smith@example.com'
    );
INSERT INTO symptoms(symptom)
VALUES ('Headache'),
    ('Sprained ankle'),
    ('Fever'),
    ('Nausea'),
    ('Diarrhea'),
    ('Cough'),
    ('Shortness of breath'),
    ('Chest pain'),
    ('Dizziness'),
    ('Sweating'),
    ('Rapid heart rate'),
    ('Abdominal pain'),
    ('Joint pain'),
    ('Muscle aches'),
    ('Skin rash') ('Itching'),
    ('Swelling'),
    ('Bruising'),
    ('Weight loss'),
    ('Appetite changes'),
    ('Difficulty swallowing'),
    ('Changes in vision'),
    ('Hearing loss'),
    ('Tinnitus (ringing in the ears)'),
    ('Difficulty speaking'),
    ('Memory loss'),
    ('Confusion'),
    ('Mood swings'),
    ('Anxiety'),
    ('Depression'),
    ('Insomnia'),
    ('Sleep disturbances'),
    ('Tremors'),
    ('Numbness'),
    ('Tingling'),
    ('Balance problems'),
    ('Changes in bowel habits'),
    ('Changes in urination'),
    ('Blood in urine'),
    ('Blood in stool'),
    ('Irregular menstrual cycles'),
    ('Pain during intercourse'),
    ('Erectile dysfunction'),
    ('Decreased libido'),
    ('Hot flashes'),
    ('Cold intolerance'),
    ('Excessive thirst'),
    ('Excessive hunger');
INSERT INTO doctors (name, specialization, contact, rating)
VALUES (
        'Dr. Alice Johnson',
        'Neurologist',
        'alice.johnson@hospital.com',
        4.5
    ),
    (
        'Dr. Bob Williams',
        'Orthopedist',
        'bob.williams@hospital.com',
        4.7
    );
INSERT INTO recommendations (user_id, doctor_id, symptom_id)
VALUES (1, 1, 1),
    (2, 2, 2);
INSERT INTO public.doctors (name, specialization, contact, rating, department)
VALUES 
  ('John Anderson', 'Cardiology', '123-456-7890', 4.5, 'Trung Vuong Hospital'),
  ('Emily Davis', 'Orthopedics', '987-654-3210', 3.8, 'Trung Vuong Hospital'),
  ('Michael Johnson', 'Pediatrics', '555-123-4567', 4.2, 'Trung Vuong Hospital'),
  ('Sophia Wilson', 'Dermatology', '789-456-1230', 4.0, 'Trung Vuong Hospital'),
  ('Olivia Carter', 'Ophthalmology', '222-333-4444', 4.8, 'Hung Vuong Department'),
  ('William Smith', 'Neurology', '333-222-1111', 4.3, 'Hung Vuong Department'),
  ('Emma Brown', 'Internal Medicine', '444-555-6666', 4.6, 'Hung Vuong Department'),
  ('James Taylor', 'Gastroenterology', '777-888-9999', 3.9, 'Hung Vuong Department'),
  ('Ava Martinez', 'Endocrinology', '666-555-4444', 4.7, 'Hung Vuong Department'),
  ('Daniel White', 'Obstetrics and Gynecology', '888-999-0000', 4.1, 'Hung Vuong Department');
INSERT INTO public.symptom_specialization (symptom_id, doctor_id)
VALUES 
  (8, 1),
  (9, 2),
  (10, 4),
  (11, 5),
  (12, 6),
  (13, 7),
  (14, 8),
  (15, 9),
  (16, 10),
  (8, 11),
  (9, 12),
  (10, 13);
INSERT INTO public.recommendations (user_id, doctor_id, symptom_id, notes, shift, symptom_id_array)
VALUES 
  (1, 1, 1, 'Follow-up after initial consultation', 'MORNING', '{1, 2}'),
  (2, 2, 3, 'Prescription for medication', 'AFTERNOON', '{3, 4, 5}'),
  (9, 4, 5, 'MRI scheduled for next week', 'MORNING', '{5, 6, 7}'),
  (11, 6, 7, 'Lab tests ordered', 'AFTERNOON', '{7, 8}'),
  (5, 8, 9, 'Discussing surgery options', 'MORNING', '{9, 10, 11}'),
  (1, 10, 11, 'Physical therapy recommended', 'AFTERNOON', '{11, 12, 13}'),
  (2, 12, 13, 'Reviewing lifestyle changes', 'MORNING', '{13, 14}'),
  (8, 13, 15, 'Referral to a specialist', 'AFTERNOON', '{15, 16}'),
  (13, 1, 2, 'Monitoring blood pressure', 'MORNING', '{2, 3, 4}'),
  (5, 4, 4, 'Discussing dietary changes', 'AFTERNOON', '{4, 5, 6}');
