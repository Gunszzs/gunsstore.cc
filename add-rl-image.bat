@echo off
cd /d "%~dp0"
echo Adding RL Switch 2.0 image for the website...
py capture_rl_image.py
if exist rlswitch2.png (
  echo OK: rlswitch2.png is ready in this folder.
) else (
  echo.
  echo Save your RL Switch screenshot as:
  echo   %~dp0rlswitch2.png
)
pause
