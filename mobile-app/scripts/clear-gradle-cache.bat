@echo off
REM Clears corrupted Gradle artifact downloads (bundletool etc.)
set GRADLE_USER_HOME=%USERPROFILE%\.gradle

echo Clearing failed Google Maven / bundletool caches...
if exist "%GRADLE_USER_HOME%\caches\modules-2\files-2.1\com.android.tools.build\bundletool" (
  rmdir /s /q "%GRADLE_USER_HOME%\caches\modules-2\files-2.1\com.android.tools.build\bundletool"
  echo Removed bundletool cache
)

if exist "%GRADLE_USER_HOME%\caches\transforms-3" (
  rmdir /s /q "%GRADLE_USER_HOME%\caches\transforms-3"
  echo Removed transforms-3
)

REM Also clear any incomplete downloads journal
if exist "%GRADLE_USER_HOME%\caches\modules-2\metadata-2.107" (
  echo Metadata cache kept
)

echo.
echo Done. Now run:
echo   cd G:\Aman\test\mobile-app\android
echo   .\gradlew.bat assembleDebug --no-daemon --refresh-dependencies
echo.
pause
