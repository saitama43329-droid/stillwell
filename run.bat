@echo off
title StillWell - English Lesson Website

echo ========================================
echo StillWell - English Lesson Website
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    echo.
    call npm install
    if errorlevel 1 (
        echo.
        echo ERROR: Failed to install dependencies!
        pause
        exit /b 1
    )
    echo.
    echo Installation complete!
    echo.
)

REM Always build to ensure latest version
echo Building optimized production version...
echo This may take a minute...
echo.
call npm run build
if errorlevel 1 (
    echo.
    echo ERROR: Build failed!
    pause
    exit /b 1
)
echo.
echo Build complete!
echo.

echo ========================================
echo SERVER STARTING...
echo ========================================
echo.

REM Open browser after 3 seconds in background
start /min cmd /c "timeout /t 3 /nobreak >nul && start http://localhost:3000"

REM Start the server in a new persistent window
start "StillWell Server - DO NOT CLOSE" /wait cmd /k "npm start"

echo.
echo Server window opened!
echo You can close this window now.
echo.
pause
