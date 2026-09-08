import json
from pathlib import Path
from dotenv import load_dotenv
from upstash_vector import Index

SCRIPT_DIR = Path(__file__).resolve().parent
ROOT_DIR = SCRIPT_DIR.parent

ENV_PATH = ROOT_DIR / ".env"
JSON_PATH = ROOT_DIR / "data" / "cvingest.json"

load_dotenv(dotenv_path=ENV_PATH)

index = Index.from_env()

def run_ingestion():
    if not JSON_PATH.exists():
        print(f"Error: File not found at {JSON_PATH}")
        return

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        cv_chunks = json.load(f)

    vectors_to_upsert = [
        (
            chunk["id"],
            chunk["data"],
            chunk.get("metadata", {})
        )
        for chunk in cv_chunks
    ]

    index.upsert(vectors=vectors_to_upsert)
    print(f"Successfully ingested {len(cv_chunks)} chunks to Upstash Vector DB.")

if __name__ == "__main__":
    run_ingestion()