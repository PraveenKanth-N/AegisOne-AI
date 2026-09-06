"""
College Placement Portal — Intentionally Vulnerable Demonstration Target
Designed strictly for defensive application security training, DAST crawling,
and isolated sandbox remediation verification. Runs on localhost:8001.
"""
import sqlite3
import os
from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="College Placement Portal (Target Lab)",
    description="Intentionally vulnerable test target for AegisOne AI verification.",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DB_PATH = "college_placement_lab.db"

def init_lab_db():
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS students (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            department TEXT NOT NULL,
            cgpa REAL NOT NULL,
            email TEXT NOT NULL,
            bio TEXT NOT NULL
        )
    """)
    # Seed if empty
    cursor.execute("SELECT COUNT(*) FROM students")
    if cursor.fetchone()[0] == 0:
        cursor.executemany("""
            INSERT INTO students (name, department, cgpa, email, bio)
            VALUES (?, ?, ?, ?, ?)
        """, [
            ("Ananya Sharma", "Computer Science", 3.92, "ananya@univ.edu", "AI/ML researcher and campus placement coordinator."),
            ("Rohan Verma", "Information Technology", 3.85, "rohan@univ.edu", "Full-stack cloud architect & competitive programmer."),
            ("Priya Patel", "Computer Science", 3.78, "priya@univ.edu", "DevSecOps enthusiast interested in container security."),
            ("Vikram Malhotra", "Electrical Engineering", 3.65, "vikram@univ.edu", "Embedded systems and firmware security specialist.")
        ])
    conn.commit()
    conn.close()

init_lab_db()

@app.get("/", response_class=HTMLResponse)
async def home():
    return """
    <!DOCTYPE html>
    <html>
    <head>
        <title>Campus Placement & Recruitment Portal</title>
        <style>
            body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #0f172a; color: #f8fafc; padding: 40px; }
            .card { background: #1e293b; padding: 25px; border-radius: 10px; max-width: 800px; margin: 0 auto 20px; border: 1px solid #334155; }
            h1 { color: #38bdf8; margin-top: 0; }
            .badge { background: #f43f5e; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: bold; }
            a { color: #38bdf8; text-decoration: none; }
            code { background: #0f172a; padding: 2px 6px; border-radius: 4px; color: #a78bfa; }
        </style>
    </head>
    <body>
        <div class="card">
            <h1>Campus Placement Portal <span class="badge">TEST LAB TARGET</span></h1>
            <p>Authorized intentionally vulnerable demonstration application running on <code>localhost:8001</code>.</p>
            <h3>Exposed Test Endpoints:</h3>
            <ul>
                <li><strong>CWE-89 (SQLi):</strong> <code>/api/students/search?department=Computer+Science</code></li>
                <li><strong>CWE-79 (XSS):</strong> <code>/profile/view?id=1</code></li>
                <li><strong>CWE-798 (Weak Auth):</strong> <code>/auth/login</code></li>
            </ul>
        </div>
    </body>
    </html>
    """

# ─── CWE-89: Intentionally Vulnerable SQL Injection Endpoint ──────────────────
@app.get("/api/students/search")
async def search_students(department: str = ""):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    # VULNERABLE: Direct string interpolation allows SQL injection
    query = f"SELECT id, name, department, cgpa, email FROM students WHERE department = '{department}'"
    try:
        cursor.execute(query)
        rows = cursor.fetchall()
        students = [
            {"id": r[0], "name": r[1], "department": r[2], "cgpa": r[3], "email": r[4]}
            for r in rows
        ]
        return JSONResponse(content={"query_executed": query, "results": students})
    except Exception as e:
        return JSONResponse(status_code=500, content={"error": str(e), "query": query})
    finally:
        conn.close()

# ─── CWE-79: Intentionally Vulnerable XSS Profile Endpoint ────────────────────
@app.get("/profile/view", response_class=HTMLResponse)
async def view_profile(id: int = 1):
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    cursor.execute("SELECT name, department, cgpa, bio FROM students WHERE id = ?", (id,))
    row = cursor.fetchone()
    conn.close()
    
    if not row:
        return HTMLResponse("<h3>Student not found</h3>", status_code=404)
        
    name, dept, cgpa, bio = row
    # VULNERABLE: bio renders without HTML entity escaping
    return f"""
    <div style="background: #1e293b; color: white; padding: 20px; border-radius: 8px; font-family: sans-serif;">
        <h2>Candidate: {name}</h2>
        <p><strong>Department:</strong> {dept}</p>
        <p><strong>CGPA:</strong> {cgpa}</p>
        <hr style="border-color: #334155;">
        <div><strong>Bio / Profile:</strong> {bio}</div>
    </div>
    """

# ─── CWE-798: Insecure Hardcoded Credential Authentication ────────────────────
@app.post("/auth/login")
async def login(request: Request):
    data = await request.json()
    username = data.get("username", "")
    password = data.get("password", "")
    
    # VULNERABLE: Hardcoded credential
    if username == "admin" and password == "admin123":
        return {"status": "SUCCESS", "role": "admin", "token": "lab-mock-admin-token-xyz"}
    return JSONResponse(status_code=401, content={"status": "FAILED", "message": "Invalid credentials"})

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
