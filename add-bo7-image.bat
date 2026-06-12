@echo off
cd /d "%~dp0"
echo Adding BO7 Thunex screenshot...
python capture_bo7_image.py
if exist assets\bo7-thunex.png (
  echo OK: assets\bo7-thunex.png is ready.
) else (
  echo.
  echo If capture failed, save your screenshot as:
  echo   %~dp0assets\bo7-thunex.png
  echo Or copy the image to your clipboard and run this again.
)
pause
