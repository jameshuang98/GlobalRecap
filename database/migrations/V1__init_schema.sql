CREATE TABLE articles (
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL,
    source TEXT,
    published_at TIMESTAMPTZ,
    summary TEXT,
    full_text TEXT,
    url TEXT UNIQUE NOT NULL
);
