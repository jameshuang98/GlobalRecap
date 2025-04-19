import feedparser
from datetime import datetime
from typing import List, Dict
from bs4 import BeautifulSoup
from models import Article


def load_feeds_from_file(file_path: str = "feeds.txt") -> List[str]:
    with open(file_path, "r", encoding="utf-8") as file:
        feeds = [line.strip() for line in file if line.strip() and not line.startswith("#")]
        return feeds

def parse_rss_feed(url: str) -> List[Dict[str, str]]:
    feed = feedparser.parse(url)
    articles : List[Article] = []

    for entry in feed.entries:
        title = entry.get("title", "No Title")
        source = feed.feed.get("title", "No Source Title")
        published = entry.get("published", "No Published Date")
        event_date = _parse_datetime(published)
        raw_summary = entry.get("summary", "")
        cleaned_summary = _clean_html(raw_summary)
        content = _extract_content(entry)
        url = entry.get("link", "No Link")
        category = None
        
        article = Article(
            title=title,
            source=source,
            event_date=event_date,
            summary=cleaned_summary,
            content=content,
            url = url,
            category=category
        )
        articles.append(article)

    return articles

def _clean_html(raw_html: str) -> str:
    if not raw_html:
        return ""
    soup = BeautifulSoup(raw_html, "html.parser")
    return soup.get_text(separator=" ", strip=True)

def _extract_content(entry) -> str:
    if "content" in entry and isinstance(entry.content, list) and len(entry.content) > 0:
        return entry.content[0].value
    return entry.get("description", "")

def _parse_datetime(raw_date: str) -> str:
    try:
        parsed = datetime.strptime(raw_date, "%Y-%m-%dT%H:%M:%SZ").isoformat()
    except ValueError:
        return raw_date