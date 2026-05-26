@echo off
cd /d "%~dp0"
echo Capturing MW2 Switch2.0 panel image...
python capture_mw2_image.py
if exist mw2switch2.png (
  echo OK: mw2switch2.png is ready.
) else (
  echo.
  echo If capture failed, save your screenshot as:
  echo   %~dp0mw2switch2.png
)
pause
