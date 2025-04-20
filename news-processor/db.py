from config import DATABASE_URL
from models import Article
from typing import List

def insert_articles_and_tags(article: Article, tags: List[str], conn) -> int:
    with conn.cursor() as cursor:
        cursor.execute("""
        INSERT INTO articles (title, source, event_date, summary, content, url, category)
        VALUES (%s, %s, %s, %s, %s, %s, %s)
        ON CONFLICT (url) DO NOTHING
        RETURNING id;  
        """, (
            article.title,
            article.source,
            article.event_date,
            article.summary,
            article.content,
            article.url,
            article.category
        ))
        
        article_id = cursor.fetchone()[0]
        
        for tag in tags:
            cursor.execute("""
            INSERT INTO article_tags (article_id, tag)
            VALUES (%s, %s)
            ON CONFLICT (article_id, tag) DO NOTHING;
            """, (article_id, tag))    
    
    return article_id