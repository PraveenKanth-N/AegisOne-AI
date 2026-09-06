"""
AegisOne AI - Scope Guard
Hard enforcement boundary: NO scans are permitted against targets
outside the authorized whitelist. This is non-negotiable.
"""
from urllib.parse import urlparse
from fastapi import HTTPException
from backend.app.core.config import settings

def verify_target(url: str) -> dict:
    """
    Checks target URL against the authorized host whitelist.
    Returns authorization dict. Raises HTTP 403 if unauthorized.
    """
    try:
        parsed = urlparse(url)
        host = parsed.hostname or ""
    except Exception:
        raise HTTPException(400, "Invalid target URL format")
    
    allowed = set(settings.ALLOWED_TARGET_HOSTS)
    
    if host in allowed:
        return {
            "authorized": True,
            "host": host,
            "status": "AUTHORIZED",
            "badge": "AUTHORIZED LOCAL TARGET — SAFE TO SCAN",
            "badge_color": "green"
        }
    else:
        raise HTTPException(
            status_code=403,
            detail={
                "error": "SCOPE_VIOLATION",
                "message": f"Target host '{host}' is NOT in the authorized scope. Only {sorted(allowed)} are permitted.",
                "badge": "TARGET NOT VERIFIED — SCAN BLOCKED",
                "badge_color": "red"
            }
        )
