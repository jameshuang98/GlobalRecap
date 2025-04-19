from rss_reader import load_feeds_from_file, parse_rss_feed
from db import insert_articles

if __name__ == "__main__":
    all_articles = []

    for url in load_feeds_from_file():
        print(f"Fetching articles from: {url}")
        articles = parse_rss_feed(url)
        all_articles.extend(articles)

    print(f"\nTotal articles fetched: {len(all_articles)}")

    insert_articles(all_articles)
    print("Articles inserted into the database.")