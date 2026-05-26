#!/usr/bin/env python3
"""Capture RL Switch2.0 panel screenshot for the shop page."""
from __future__ import annotations

import os
import sys
from pathlib import Path

SWITCH_ROOT = Path(r"C:\Users\King2\Desktop\switch2.0")
OUT = Path(__file__).resolve().parent / "rlswitch2.png"
FALLBACKS = (
    SWITCH_ROOT / "syn_app" / "assets" / "insanesec_rl_splash.png",
    SWITCH_ROOT / "syn_app" / "assets" / "insanesec_switch2_splash.png",
)
USER_SCREENSHOT_CANDIDATES = (
    OUT,
    Path.home() / "Desktop" / "rlswitch2.png",
    Path.home() / "Downloads" / "rlswitch2.png",
)


def copy_existing_screenshot() -> bool:
    for src in USER_SCREENSHOT_CANDIDATES:
        if src == OUT or not src.is_file():
            continue
        OUT.write_bytes(src.read_bytes())
        print(f"Copied screenshot -> {OUT} ({OUT.stat().st_size} bytes)")
        return True
    return False


def copy_fallback() -> bool:
    for src in FALLBACKS:
        if src.is_file():
            OUT.write_bytes(src.read_bytes())
            print(f"Copied fallback -> {OUT} from {src}")
            return True
    return False


def capture_panel() -> bool:
    if not SWITCH_ROOT.is_dir():
        return False

    os.environ.setdefault("QT_QPA_PLATFORM", "windows")
    sys.path.insert(0, str(SWITCH_ROOT))

    from PyQt6.QtWidgets import QApplication
    from syn_app.ui.rl_switch_panel import RlSwitchPanelWindow

    app = QApplication(sys.argv)
    window = RlSwitchPanelWindow()
    window.title_lbl.setText("RL Switch 2.0 | User: GunsLTSwitch")
    window.ip_lbl.setText("IP: 18.133.99.68")
    window.port_lbl.setText("Port: 7930")
    window.geo_lbl.setText("ISP / Country: Amazon Technologies Inc. · United Kingdom")
    window.status_lbl.setText("Status: Server detected")
    window.show()
    for _ in range(12):
        app.processEvents()

    pixmap = window.grab()
    window.close()
    if pixmap.isNull():
        return False

    ok = pixmap.save(str(OUT), "PNG")
    if ok and OUT.is_file():
        print(f"Captured panel -> {OUT} ({OUT.stat().st_size} bytes)")
    return bool(ok)


def main() -> int:
    if copy_existing_screenshot():
        return 0
    if capture_panel():
        return 0
    if copy_fallback():
        return 0
    print("Failed: save your RL Switch screenshot as rlswitch2.png in this folder.", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
