import openai
from models import NewsCategory
import json
from config import OPENAI_API_KEY

def process_article(title: str, content: str) -> dict:
    openai.api_key = OPENAI_API_KEY
    
    prompt = f"""
    You are a smart assistant that reads full news articles and returns structured information about them by performing the following tasks:
    1. Write a clear and concise 3-4 sentence summary of the article
    2. Choose one category for the article from this list: {', '.join([cat.value for cat in NewsCategory])}
    3. Assign tags to describe the article. You are to choose the tags from 3 different types of tags: Sentiment, Bias, and Political bias. For each category of tag, you may only choose one.
    
    Sentiment tags (required): 
       - Choose **exactly one** from: "positive", "negative", or "neutral". Do not include more than one sentiment tag.
    Bias tags (optional and may apply to any category): 
        - Choose **exactly one** from: "slightly_biased" or "biased". Do not include more than one Bias tag.
    Political bias tags (optional and only applies to political articles):
        - Choose **exactly one** from: "left_leaning" or "right_leaning". Do not include more than one Political bias tag.
    
    Return a JSON object like this:
    {{
        "summary": "...",
        "category": "Politics",
        "tags": ["neutral", "slightly_biased", "left_leaning"],
    }}
    
    Now analyze the article below:

    Title: {title}
    Article:
    \"\"\"
    {content}
    \"\"\"
    
    """
    response = openai.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.5,
        # max_tokens=300,
    )
    return json.loads(response.choices[0].message.content.strip())
    