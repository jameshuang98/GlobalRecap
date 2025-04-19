from dataclasses import dataclass
from datetime import date
from enum import Enum

class NewsCategory(Enum):
    POLITICS = "Politics"
    BUSINESS = "Business"
    TECHNOLOGY = "Technology"
    SPORTS = "Sports"
    HEALTH = "Health"
    ENTERTAINMENT = "Entertainment"
    ENVIRONMENT = "Environment"
    

@dataclass
class Article:
    title: str
    source: str
    event_date: date
    summary: str
    content: str
    url: str
    category: NewsCategory
    