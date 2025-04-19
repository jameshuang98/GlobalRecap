import psycopg2
from config import DATABASE_URL

try:
    print(DATABASE_URL)
    conn = psycopg2.connect(DATABASE_URL)
    print("Database connection successful.")
    conn.close()
except Exception as e:
    print(f"Database connection failed: {e}")