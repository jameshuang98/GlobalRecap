ALTER TABLE articles
    RENAME COLUMN published_at TO event_date;

ALTER TABLE articles
    ALTER COLUMN event_date SET NOT NULL;

ALTER TABLE articles
    ALTER COLUMN event_date TYPE DATE USING event_date::DATE;
