CREATE TABLE
  IF NOT EXISTS categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(200) UNIQUE NOT NULL
  );
CREATE TABLE
  IF NOT EXISTS products (
    id UUID PRIMARY KEY,
    name VARCHAR(200) NOT NULL,
    price DECIMAL(8, 2) NOT NULL,
    category_id INTEGER REFERENCES categories (id) ON DELETE
    SET
      NULL
  );