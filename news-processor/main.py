import psycopg2
from rss_reader import load_feeds_from_file, parse_rss_feed
from ai_processor import process_article
from db import insert_articles_and_tags
from config import DATABASE_URL
from utils import validate_tags

def main():
    try:
        all_articles = []

        for url in load_feeds_from_file():
            print(f"Fetching articles from: {url}")
            articles = parse_rss_feed(url)
            all_articles.extend(articles)
        print(f"\nTotal articles fetched: {len(all_articles)}")
        
        if not articles:
            print("No articles found in the RSS feeds.")
            return
        
        with psycopg2.connect(DATABASE_URL) as conn:
            for article in all_articles:
                try:
                    print(f"\nProcessing article: {article.title}")
                    result = process_article(article.title, article.content)
                    article.summary = result.get("summary")
                    article.category = result.get("category")
                    tags = result.get("tags", [])
                    validated_tags = validate_tags(tags)
                    
                    article_id = insert_articles_and_tags(article, validated_tags, conn)
                    print(f"Inserted article Id: {article_id} with tags: {validated_tags}")
                except Exception as article_err:
                    print(f"Error processing article '{article.title}': {article_err}")
        
    except Exception as err:
        print(f"Unexpected error while running main(): {err}")
        
    
if __name__ == "__main__":
    main()