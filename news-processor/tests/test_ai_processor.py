import json
import os
import sys
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))
from ai_processor import process_article

sample_title = "Senate Passes Budget Bill with Bipartisan Support"
sample_content = """
In a rare moment of bipartisan cooperation, the Senate has passed a budget bill with bipartisan support, ensuring government funding through the end of the fiscal year. The bill includes provisions for disaster relief and military funding. Senators from both parties praised the compromise, highlighting the importance of working together to address national priorities.
"""

def main():
    print("Sending article to OpenAI API for processing...")
    result = process_article(sample_title, sample_content)
    
    print("\nAI Processing result:")
    print(json.dumps(result, indent=4))
    validated_tags = result.get("tags", [])
    
if __name__ == "__main__":
    main()
    