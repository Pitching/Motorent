-- Drop and recreate Users table (Example)

DROP TABLE IF EXISTS motorcycles CASCADE;
CREATE TABLE motorcycles (
  id SERIAL PRIMARY KEY NOT NULL,
  make VARCHAR(255) NOT NULL,
  model VARCHAR(255) NOT NULL,
  year VARCHAR(255) NOT NULL,
  km VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);