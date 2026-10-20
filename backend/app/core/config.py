import os
from typing import List
from dotenv import load_dotenv

# Load local environment file
load_dotenv()

class Settings:
    PROJECT_NAME: str = "AegisOne AI"
    VERSION: str = "1.0.0"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = os.getenv("ENVIRONMENT", "development")
    
    # Database (resolve absolute path for sqlite so tests from any working directory find the same db)
    BASE_DIR: str = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
    DEFAULT_DB_PATH: str = os.path.join(BASE_DIR, "aegisone.db").replace("\\", "/")
    DATABASE_URL: str = os.getenv("DATABASE_URL", f"sqlite+aiosqlite:///{DEFAULT_DB_PATH}")
    
    # Security & Scope Guard (strictly whitelisted targets)
    ALLOWED_TARGET_HOSTS: List[str] = [
        h.strip() for h in os.getenv(
            "ALLOWED_TARGET_HOSTS", 
            "localhost,127.0.0.1,host.docker.internal,college-placement-portal,vulnerable-lab"
        ).split(",") if h.strip()
    ]
    
    # Authentication & JWT
    JWT_SECRET_KEY: str = os.getenv("JWT_SECRET_KEY", "aegisone_dev_jwt_secret_key_change_in_production_32b")
    JWT_ALGORITHM: str = os.getenv("JWT_ALGORITHM", "HS256")
    ACCESS_TOKEN_EXPIRE_MINUTES: int = int(os.getenv("ACCESS_TOKEN_EXPIRE_MINUTES", "480"))
    
    # Knowledge Graph
    USE_NEO4J: bool = os.getenv("USE_NEO4J", "false").lower() in ("true", "1", "yes")
    NEO4J_URI: str = os.getenv("NEO4J_URI", "bolt://localhost:7687")
    NEO4J_USER: str = os.getenv("NEO4J_USER", "neo4j")
    NEO4J_PASSWORD: str = os.getenv("NEO4J_PASSWORD", "aegisone_secret")
    
    # AI Engine
    AI_PROVIDER: str = os.getenv("AI_PROVIDER", "mock") # mock, openai, gemini
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    AI_MODEL: str = os.getenv("AI_MODEL", "gpt-4o-mini")
    
    # Target Lab URL
    VULNERABLE_APP_URL: str = os.getenv("VULNERABLE_APP_URL", "http://localhost:8001")
    ZAP_API_URL: str = os.getenv("ZAP_API_URL", "http://localhost:8080")
    ZAP_API_KEY: str = os.getenv("ZAP_API_KEY", "")

settings = Settings()
