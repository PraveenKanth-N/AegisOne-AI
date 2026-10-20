# AegisOne AI - Master Verification Test Runner

Write-Host "==========================================================" -ForegroundColor Cyan
Write-Host "  AegisOne AI -- Running Comprehensive Verification Suite" -ForegroundColor Cyan
Write-Host "==========================================================" -ForegroundColor Cyan

$root = "D:\AegisOne-AI"

# 1. Backend Pytest
Write-Host ""
Write-Host "[1/2] Running Backend Unit, Integration, and Security Tests..." -ForegroundColor Yellow
$env:PYTHONPATH = $root
& "$root\venv\Scripts\python.exe" -m pytest "$root\backend\tests" -v
if ($LASTEXITCODE -ne 0) {
    Write-Host "Backend tests failed!" -ForegroundColor Red
    exit 1
}

# 2. Frontend Production Build
Write-Host ""
Write-Host "[2/2] Running Frontend TypeScript and Production Build Verification..." -ForegroundColor Yellow
Set-Location "$root\frontend"
& npm.cmd run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "Frontend build failed!" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "All AegisOne AI verification tests PASSED with 0 errors!" -ForegroundColor Green
