from models import Tag

SENTIMENT_TAGS = {Tag.POSITIVE.value, Tag.NEGATIVE.value, Tag.NEUTRAL.value}

def validate_tags(raw_tags: list[str]) -> list[str]:
    """
    Filters and returns only valid tags that match the Tag enum
    Raises an error if no valid sentiment tag is found
    """
    
    if not raw_tags:
        raise ValueError("No tags were provided.")
    
    valid_tags = []
    sentiment_found = False
    
    for tag in raw_tags:
        tag = tag.strip().lower()
        try:
            tag_enum = Tag(tag)
            valid_tags.append(tag_enum.value)
            
            if tag_enum.value in SENTIMENT_TAGS:
                if sentiment_found:
                    raise ValueError("Multiple sentiment tags found. Only one is allowed.")
                sentiment_found = True
            
        except ValueError:
            print(f"Invalid tag found: {tag}. Ignoring.")
            continue
        
    if not sentiment_found:
        raise ValueError("No valid sentiment tag found. At least one of 'positive', 'negative', or 'neutral' is required.")
    
    return valid_tags