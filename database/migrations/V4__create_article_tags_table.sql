CREATE TYPE tag AS ENUM (
  'Positive',
  'Neutral',
  'Negative',
  'Left-leaning',
  'Right-leaning',
  'Slightly-biased',
  'Biased'
);

CREATE TABLE article_tags (
  article_id INT NOT NULL,
  tag tag NOT NULL,
  PRIMARY KEY (article_id, tag),
  CONSTRAINT fk_article
    FOREIGN KEY (article_id)
    REFERENCES articles(id)
    ON DELETE CASCADE
);