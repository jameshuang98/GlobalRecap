import psycopg2
from psycopg2.extras import execute_values
from config import DATABASE_URL
from models import Article
from typing import List

def insert_articles(articles: List[Article]):
    if not articles:
        return
    
    insert_query = """
        INSERT INTO articles (title, source, event_date, summary, content, url, category)
        VALUES %s
        ON CONFLICT (url) DO NOTHING;
    """

    records = [
        (
            article.title,
            article.source,
            article.event_date,
            article.summary,
            article.content,
            article.url,
            article.category.value if article.category else 'Politics'
        ) for article in articles
    ]
    
    try:
        with psycopg2.connect(DATABASE_URL) as conn:
            with conn.cursor() as cursor:
                execute_values(cursor, insert_query, records)
                conn.commit()
                print(f"Inserted {len(records)} articles into the database.")
    except Exception as e:
        print(f"Error inserting articles into the database: {e}")
        
    