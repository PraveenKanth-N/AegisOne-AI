# AegisOne AI - Master Startup Script (Windows PowerShell)
# Launches Backend (8000), Vulnerable Lab (8001), and Frontend (5173)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  AegisOne AI -- Starting Command Center and Services" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$root = "D:\AegisOne-AI"

# 1. Start Backend
Write-Host "[1/3] Starting AegisOne Backend on http://localhost:8000 ..." -ForegroundColor Green
Start-Process -FilePath "$root\venv\Scripts\python.exe" -ArgumentList "-m uvicorn backend.app.main:app --port 8000 --reload" -WorkingDirectory $root

# 2. Start Vulnerable Lab
Write-Host "[2/3] Starting Vulnerable Target Lab on http://localhost:8001 ..." -ForegroundColor Green
Start-Process -FilePath "$root\venv\Scripts\python.exe" -ArgumentList "vulnerable-lab\app.py" -WorkingDirectory $root

# 3. Start Frontend
Write-Host "[3/3] Starting Frontend Dev Server on http://localhost:5173 ..." -ForegroundColor Green
Start-Process -FilePath "npm.cmd" -ArgumentList "run dev" -WorkingDirectory "$root\frontend"

Write-Host "All services dispatched! Open browser at http://localhost:5173" -ForegroundColor Cyan
