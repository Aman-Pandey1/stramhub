@echo off
cd /d "%~dp0.."
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0init-rn-cli.ps1"
pause
