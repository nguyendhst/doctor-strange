ALTER TABLE symptoms
DROP COLUMN notes;

ALTER TABLE recommendations
ADD COLUMN notes text null;