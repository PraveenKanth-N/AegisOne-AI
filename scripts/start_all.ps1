# AegisOne AI - Master Startup Script (Windows PowerShell)
# Launches Backend (8000), Vulnerable Lab (8001), and Frontend (5173)

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  AegisOne AI -- Starting Command Center and Services" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$root = "D:\AegisOne-AI"

# 1. Start Backend with PYTHONPATH set
Write-Host "[1/3] Starting AegisOne Backend on http://localhost:8000 ..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit -Command Set-Location '$root'; `$env:PYTHONPATH='$root'; .\venv\Scripts\python.exe -m uvicorn backend.app.main:app --host 0.0.0.0 --port 8000 --reload"

# 2. Start Vulnerable Lab
Write-Host "[2/3] Starting Vulnerable Target Lab on http://localhost:8001 ..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit -Command Set-Location '$root'; .\venv\Scripts\python.exe vulnerable-lab\app.py"

# 3. Start Frontend Dev Server
Write-Host "[3/3] Starting Frontend Dev Server on http://localhost:5173 ..." -ForegroundColor Green
Start-Process powershell -ArgumentList "-NoExit -Command Set-Location '$root\frontend'; npm run dev -- --port 5173 --host 0.0.0.0"

Write-Host "All services dispatched! Open browser at http://localhost:5173" -ForegroundColor Cyan
