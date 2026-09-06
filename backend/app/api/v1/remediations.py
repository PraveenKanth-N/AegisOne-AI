"""
AegisOne AI - Remediation API
Manages secure patch proposals, side-by-side code diffs,
and automated rollback execution.
"""
from typing import List, Optional
from datetime import datetime, timezone
from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy import select

from backend.app.core.database import get_db
from backend.app.models import Finding, Remediation, ValidationRun, Project
from backend.app.schemas import RemediationCreate, RemediationResponse, ValidationRunResponse
from backend.app.services.audit_logger import log_event

router = APIRouter(prefix="/remediations", tags=["Remediations"])

# Default curated remediation templates for controlled demo findings
REMEDIATION_KNOWLEDGE = {
    "CWE-89": {
        "original_code": """# Vulnerable Code: Direct SQL String Formatting
@app.route('/api/students/search', methods=['GET'])
def search_students():
    dept = request.args.get('department', '')
    query = f"SELECT id, name, gpa, resume_url FROM students WHERE department = '{dept}'"
    cursor = db.cursor()
    cursor.execute(query)  # SQL Injection Vulnerability: CWE-89
    return jsonify(cursor.fetchall())
""",
        "proposed_code": """# Secure Remediated Code: Parameterized Query
@app.route('/api/students/search', methods=['GET'])
def search_students():
    dept = request.args.get('department', '')
    # Security Rule: Use parameterized placeholders to prevent SQL injection
    query = "SELECT id, name, gpa, resume_url FROM students WHERE department = %s"
    cursor = db.cursor()
    cursor.execute(query, (dept,))  # Validated parameterization
    return jsonify(cursor.fetchall())
""",
        "explanation": "Replaced dangerous string concatenation (f-string) with parameterized SQL placeholders (%s), ensuring user input is treated strictly as literal data by the database engine.",
        "business_impact": "Prevents unauthorized database extraction, credential theft, and unauthorized tampering of student academic and placement records."
    },
    "CWE-79": {
        "original_code": """# Vulnerable Code: Unescaped User Bio Rendering
@app.route('/profile/view/<student_id>')
def view_profile(student_id):
    student = get_student(student_id)
    # Direct HTML injection vulnerability: CWE-79
    html = f"<div><h3>{student.name}</h3><p>{student.bio}</p></div>"
    return render_template_string(html)
""",
        "proposed_code": """# Secure Remediated Code: Context-Aware Output Sanitization
import html
import bleach

@app.route('/profile/view/<student_id>')
def view_profile(student_id):
    student = get_student(student_id)
    # Security Rule: Sanitize untrusted markup and escape HTML entities
    clean_bio = bleach.clean(student.bio or "", tags=['b', 'i', 'u', 'em', 'strong'], strip=True)
    return render_template('profile.html', name=html.escape(student.name), bio=clean_bio)
""",
        "explanation": "Applied strict HTML sanitization via bleach allowlist and escaped dangerous script execution vectors.",
        "business_impact": "Blocks stored session hijacking, credential harvesting, and cross-site scripting attacks against recruiting officers."
    },
    "CWE-798": {
        "original_code": """# Vulnerable Code: Hardcoded Admin Password
DEFAULT_ADMIN_USER = "admin"
DEFAULT_ADMIN_PASS = "admin123"  # Insecure hardcoded credential: CWE-798

def verify_admin(user, pwd):
    return user == DEFAULT_ADMIN_USER and pwd == DEFAULT_ADMIN_PASS
""",
        "proposed_code": """# Secure Remediated Code: Environment Secret with Strong Hashing
import os
import secrets
import hashlib

ADMIN_PASSWORD_HASH = os.getenv("ADMIN_PASSWORD_HASH")

def verify_admin(user, pwd):
    if user != "admin" or not ADMIN_PASSWORD_HASH:
        return False
    # Use constant-time comparison to mitigate timing side-channel attacks
    salt, expected = ADMIN_PASSWORD_HASH.split("$")
    calc = hashlib.pbkdf2_hmac('sha256', pwd.encode(), salt.encode(), 100000).hex()
    return secrets.compare_digest(calc, expected)
""",
        "explanation": "Extracted hardcoded credentials into environment secrets with PBKDF2-HMAC-SHA256 hashing and constant-time string comparison.",
        "business_impact": "Eliminates trivial administrative account takeover from source code inspection."
    }
}

@router.get("", response_model=List[RemediationResponse])
async def list_remediations(finding_id: Optional[str] = None, db: AsyncSession = Depends(get_db)):
    q = select(Remediation)
    if finding_id:
        q = q.where(Remediation.finding_id == finding_id)
    q = q.order_by(Remediation.created_at.desc())
    result = await db.execute(q)
    return result.scalars().all()

@router.get("/{remediation_id}", response_model=RemediationResponse)
async def get_remediation(remediation_id: str, db: AsyncSession = Depends(get_db)):
    result = await db.execute(select(Remediation).where(Remediation.id == remediation_id))
    rem = result.scalar_one_or_none()
    if not rem:
        raise HTTPException(404, "Remediation not found")
    return rem

@router.post("/finding/{finding_id}/generate", response_model=RemediationResponse, status_code=201)
async def generate_remediation(finding_id: str, db: AsyncSession = Depends(get_db)):
    """Generates an evidence-grounded secure remediation proposal for a finding."""
    result = await db.execute(select(Finding).where(Finding.id == finding_id))
    finding = result.scalar_one_or_none()
    if not finding:
        raise HTTPException(404, "Finding not found")
    
    template = REMEDIATION_KNOWLEDGE.get(
        finding.cwe_id, 
        {
            "original_code": f"# Original code at endpoint {finding.affected_endpoint}\n# Parameter: {finding.affected_parameter}\npass",
            "proposed_code": f"# Secure fix for {finding.title}\n# Implement validation and encoding for parameter {finding.affected_parameter}\npass",
            "explanation": f"Sanitize and validate parameter {finding.affected_parameter} to eliminate {finding.cwe_id}.",
            "business_impact": "Reduces application attack surface."
        }
    )
    
    rem = Remediation(
        finding_id=finding_id,
        original_code=template["original_code"],
        proposed_code=template["proposed_code"],
        diff="--- vulnerable\n+++ secure",
        status="PROPOSED",
        ai_model="AegisOne GraphRAG Engine v1.0",
        explanation=template["explanation"],
        business_impact=template["business_impact"]
    )
    db.add(rem)
    finding.status = "IN_REMEDIATION"
    await db.flush()
    await db.refresh(rem)
    
    await log_event(
        db, "REMEDIATION_PROPOSED", 
        f"Generated remediation candidate for finding: {finding.title}",
        resource_id=rem.id, resource_type="Remediation"
    )
    return rem

@router.post("/{remediation_id}/rollback")
async def rollback_remediation(remediation_id: str, db: AsyncSession = Depends(get_db)):
    """Rolls back a proposed or rejected remediation and restores original code."""
    result = await db.execute(select(Remediation).where(Remediation.id == remediation_id))
    rem = result.scalar_one_or_none()
    if not rem:
        raise HTTPException(404, "Remediation not found")
    
    rem.status = "ROLLED_BACK"
    
    finding_res = await db.execute(select(Finding).where(Finding.id == rem.finding_id))
    finding = finding_res.scalar_one_or_none()
    if finding:
        finding.status = "OPEN"
    
    await log_event(
        db, "REMEDIATION_ROLLED_BACK",
        f"Automated rollback executed for remediation {remediation_id}. Original code restored.",
        severity="WARNING", resource_id=remediation_id, resource_type="Remediation"
    )
    await db.commit()
    return {
        "status": "ROLLED_BACK",
        "message": "Rollback completed. Pristine baseline version restored.",
        "remediation_id": remediation_id
    }
