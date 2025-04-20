from dataclasses import dataclass
from datetime import date
from enum import Enum
from typing import List

class NewsCategory(Enum):
    POLITICS = "Politics"
    BUSINESS = "Business"
    TECHNOLOGY = "Technology"
    SPORTS = "Sports"
    HEALTH = "Health"
    ENTERTAINMENT = "Entertainment"
    ENVIRONMENT = "Environment"
    
class Tag(Enum):
    POSITIVE = "positive"
    NEGATIVE = "negative"
    NEUTRAL = "neutral"
    SLIGHTLY_BIASED = "slightly_biased"
    BIASED = "biased"
    LEFT_LEANING = "left_leaning"
    RIGHT_LEANING = "right_leaning"
    

@dataclass
class Article:
    title: str
    source: str
    event_date: date
    summary: str
    content: str
    url: str
    category: NewsCategory
    