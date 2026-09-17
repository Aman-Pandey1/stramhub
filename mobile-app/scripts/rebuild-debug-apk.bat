@echo off
REM Clear corrupted Gradle downloads (bundletool etc.) then rebuild debug APK
cd /d "%~dp0.."

echo Clearing Gradle caches for incomplete jars...
if exist "%USERPROFILE%\.gradle\caches\modules-2\files-2.1\com.android.tools.build\bundletool" (
  rmdir /s /q "%USERPROFILE%\.gradle\caches\modules-2\files-2.1\com.android.tools.build\bundletool"
  echo Removed bundletool cache
)
if exist "%USERPROFILE%\.gradle\caches\journal-1" (
  rmdir /s /q "%USERPROFILE%\.gradle\caches\journal-1"
)
if exist "%USERPROFILE%\.gradle\caches\transforms-3" (
  rmdir /s /q "%USERPROFILE%\.gradle\caches\transforms-3"
)

cd android
echo.
echo Rebuilding...
call gradlew.bat --stop
call gradlew.bat clean assembleDebug --no-daemon --refresh-dependencies

echo.
echo If SUCCESS, APK is at:
echo   android\app\build\outputs\apk\debug\app-debug.apk
pause
