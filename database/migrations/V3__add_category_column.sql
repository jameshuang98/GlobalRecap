CREATE TYPE news_category AS ENUM (
  'Politics',
  'Business',
  'Technology',
  'Sports',
  'Health',
  'Entertainment',
  'Environment'
);

ALTER TABLE articles
  ADD COLUMN category news_category;

ALTER TABLE articles
  ALTER COLUMN category SET NOT NULL;
