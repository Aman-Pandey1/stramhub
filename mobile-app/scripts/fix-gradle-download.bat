@echo off
REM Manual Gradle install helper (when download times out)
cd /d "%~dp0.."

echo.
echo 1) Browser se ye ZIP download karo:
echo    https://mirrors.cloud.tencent.com/gradle/gradle-8.6-all.zip
echo    (backup) https://services.gradle.org/distributions/gradle-8.6-all.zip
echo.
echo 2) Download hone ke baad is script ko dubara chalana...
echo    pehle empty dist folder banane ke liye:
echo.

set GRADLE_USER_HOME=%USERPROFILE%\.gradle
set DIST=%GRADLE_USER_HOME%\wrapper\dists\gradle-8.6-all

if not exist "%DIST%" mkdir "%DIST%"

echo Looking for hash folders under:
echo   %DIST%
echo.

dir /b /ad "%DIST%" 2>nul
if errorlevel 1 (
  echo Pehle ye chalao taaki hash folder bane:
  echo   cd android
  echo   .\gradlew.bat assembleDebug
  echo Phir timeout ke baad zip us hash folder mein paste karo.
  pause
  exit /b 1
)

echo.
echo ZIP ko UPAR dikhe HASH folder ke ANDAR paste karo as:
echo   gradle-8.6-all.zip
echo.
echo Phir:
echo   cd android
echo   .\gradlew.bat assembleDebug
echo.
pause
