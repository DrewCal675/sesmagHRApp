CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    role TEXT CHECK (role IN ('employee', 'manager')),
    public_profile TEXT,
    private_profile TEXT
);

CREATE TABLE user_changes (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    field_changed TEXT,
    old_value TEXT,
    new_value TEXT,
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
