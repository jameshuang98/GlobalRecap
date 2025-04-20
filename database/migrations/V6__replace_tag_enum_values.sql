ALTER TABLE article_tags
    ALTER COLUMN tag TYPE TEXT;

DROP TYPE tag;

CREATE TYPE tag AS ENUM (
    'positive',
    'negative',
    'neutral',
    'right_leaning',
    'left_leaning',
    'biased',
    'slightly_biased'
);

ALTER TABLE article_tags
    ALTER COLUMN tag TYPE tag USING tag::tag;