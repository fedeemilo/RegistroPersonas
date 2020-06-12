-- creating the database
CREATE DATABASE registro_personas_db;

-- using database
use registro_personas_db;

-- creating a table
CREATE TABLE person (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- to show all tables
SHOW TABLES;

-- to describe the table
describe person;