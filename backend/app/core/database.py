from typing import AsyncGenerator
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import declarative_base
from backend.app.core.config import settings

# Configure async engine
connect_args = {}
if settings.DATABASE_URL.startswith("sqlite"):
    connect_args["check_same_thread"] = False

engine = create_async_engine(
    settings.DATABASE_URL,
    echo=False,
    connect_args=connect_args,
    future=True
)

AsyncSessionLocal = async_sessionmaker(
    bind=engine,
    class_=AsyncSession,
    expire_on_commit=False,
    autoflush=False
)

Base = declarative_base()

async def get_db() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionLocal() as session:
        try:
            yield session
            await session.commit()
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()

from sqlalchemy import text

async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
        
        # Safe migration for validation_runs Phase 16 isolation columns
        new_cols = [
            ("execution_mode", "VARCHAR(30) DEFAULT 'IN_PROCESS_SIMULATION'"),
            ("isolation_level", "VARCHAR(30) DEFAULT 'UNISOLATED_HOST'"),
            ("container_id", "VARCHAR(64)"),
            ("production_eligible", "BOOLEAN DEFAULT 0"),
            ("checks_executed", "TEXT"),
            ("policy_verdict", "VARCHAR(50)")
        ]
        for col_name, col_def in new_cols:
            try:
                await conn.execute(text(f"ALTER TABLE validation_runs ADD COLUMN {col_name} {col_def}"))
            except Exception:
                pass
