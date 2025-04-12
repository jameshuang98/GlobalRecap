import requests
from config import NEWS_API_KEY, NEWS_API_URL

NEWS_API_URL = "https://newsapi.org/v2/top-headlines"

def fetch_top_headlines(country="us", category=None, page_size=10):
    params = {
        "country": country,
        "category": category,
        "apiKey": NEWS_API_KEY,
    }

    if category:
        params["category"] = category
    
    response = requests.get(NEWS_API_URL, params=params)
    
    if response.status_code != 200:
        raise Exception(f"NewsAPI request failed: {response.status_code} - {response.text}")
    
    articles = response.json().get("articles", [])

    return [
        {
            "title": article["title"],
            "description": article["description"],
            "content": article["content"],
            "url": article["url"],
            "publishedAt": article["publishedAt"],
        }
        for article in articles if article["title"] and article["content"]
    ]