CREATE TABLE IF NOT EXISTS contacts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(255) UNIQUE
);

INSERT INTO contacts (name, phone, email) VALUES
('John Doe', '+1-202-555-0183', 'john@example.com'),
('Jane Smith', '+1-202-555-0198', 'jane@example.com');