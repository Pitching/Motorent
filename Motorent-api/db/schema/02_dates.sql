-- Drop and recreate Widgets table (Example)

DROP TABLE IF EXISTS dates CASCADE;
CREATE TABLE dates (
  id SERIAL PRIMARY KEY NOT NULL,
  motorcycles_id INTEGER REFERENCES motorcycles(id) ON DELETE CASCADE,
  date VARCHAR(255) NOT NULL
);
