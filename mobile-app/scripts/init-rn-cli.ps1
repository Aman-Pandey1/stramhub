# Generates real React Native CLI android/ + ios/ into this app.
# Keeps existing App.tsx + src/ intact.
# Usage (from mobile-app):
#   .\scripts\init-rn-cli.ps1

$ErrorActionPreference = 'Stop'
$appRoot = Split-Path $PSScriptRoot -Parent
Set-Location $appRoot

$rnVersion = '0.74.5'
$tempDir = Join-Path $env:TEMP 'StreamHub-rn-cli-tmp'

Write-Host "==> React Native CLI bootstrap ($rnVersion)" -ForegroundColor Cyan

if (Test-Path $tempDir) {
  Remove-Item -Recurse -Force $tempDir
}

Write-Host "==> Creating temporary RN CLI project (StreamHub)..." -ForegroundColor Cyan
npx --yes @react-native-community/cli@13.6.9 init StreamHub `
  --version $rnVersion `
  --directory $tempDir `
  --pm npm `
  --skip-install `
  --skip-git-init

if (-not (Test-Path (Join-Path $tempDir 'android'))) {
  throw 'RN CLI init failed — android folder missing in temp project.'
}

foreach ($folder in @('android', 'ios')) {
  $path = Join-Path $appRoot $folder
  if (Test-Path $path) {
    Write-Host "==> Removing old $folder" -ForegroundColor Yellow
    Remove-Item -Recurse -Force $path
  }
}

Write-Host "==> Copying android/ + ios/" -ForegroundColor Cyan
Copy-Item -Recurse (Join-Path $tempDir 'android') (Join-Path $appRoot 'android')
if (Test-Path (Join-Path $tempDir 'ios')) {
  Copy-Item -Recurse (Join-Path $tempDir 'ios') (Join-Path $appRoot 'ios')
}

foreach ($file in @('Gemfile', '.watchmanconfig', 'jest.config.js', '.eslintrc.js', '.prettierrc.js')) {
  $src = Join-Path $tempDir $file
  $dst = Join-Path $appRoot $file
  if ((Test-Path $src) -and -not (Test-Path $dst)) {
    Copy-Item $src $dst
  }
}

Write-Host "==> Cleaning Expo leftovers from node_modules (fresh install)" -ForegroundColor Cyan
if (Test-Path (Join-Path $appRoot 'node_modules')) {
  Remove-Item -Recurse -Force (Join-Path $appRoot 'node_modules')
}
if (Test-Path (Join-Path $appRoot 'package-lock.json')) {
  Remove-Item -Force (Join-Path $appRoot 'package-lock.json')
}

Write-Host "==> npm install" -ForegroundColor Cyan
npm install --registry https://registry.npmjs.org/

  $buildGradle = Join-Path $appRoot 'android\app\build.gradle'
  if (Test-Path $buildGradle) {
    # keep namespace aligned with Kotlin package (com.streamhub)
    Write-Host "==> applicationId left as generated (com.streamhub)" -ForegroundColor Cyan
  }

Write-Host "==> Cleanup temp" -ForegroundColor Cyan
Remove-Item -Recurse -Force $tempDir -ErrorAction SilentlyContinue

Write-Host ""
Write-Host "RN CLI ready. Next:" -ForegroundColor Green
Write-Host "  npm start"
Write-Host "  npm run android"
Write-Host "  npm run apk:debug"
Write-Host ""
Write-Host "APK: android\app\build\outputs\apk\debug\app-debug.apk" -ForegroundColor Yellow
