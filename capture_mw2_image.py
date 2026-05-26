#!/usr/bin/env python3
"""Capture MW2 Switch2.0 panel screenshot for the shop page."""
from __future__ import annotations

import os
import sys
from pathlib import Path

SWITCH_ROOT = Path(r"C:\Users\King2\Desktop\switch2.0")
OUT = Path(__file__).resolve().parent / "mw2switch2.png"
FALLBACK = SWITCH_ROOT / "syn_app" / "assets" / "insanesec_mw2.png"
USER_SCREENSHOT_CANDIDATES = [
    OUT,
    Path.home() / "Desktop" / "mw2switch2.png",
    Path.home() / "Downloads" / "mw2switch2.png",
]


def copy_existing_screenshot() -> bool:
    for src in USER_SCREENSHOT_CANDIDATES:
        if src == OUT or not src.is_file():
            continue
        OUT.write_bytes(src.read_bytes())
        print(f"Copied screenshot -> {OUT} ({OUT.stat().st_size} bytes)")
        return True
    return False


def copy_fallback() -> bool:
    if not FALLBACK.is_file():
        return False
    OUT.write_bytes(FALLBACK.read_bytes())
    print(f"Copied fallback logo -> {OUT} ({OUT.stat().st_size} bytes)")
    return True


def capture_panel() -> bool:
    if not SWITCH_ROOT.is_dir():
        return False

    os.environ.setdefault("QT_QPA_PLATFORM", "windows")
    sys.path.insert(0, str(SWITCH_ROOT))

    from PyQt6.QtWidgets import QApplication
    from syn_app.ui.mw2_panel import Mw2PanelWindow

    app = QApplication(sys.argv)
    window = Mw2PanelWindow()
    window.title_lbl.setText("Insanesec MW2 Switch2.0 | User: GunsLTSwitch")
    window.status_lbl.setText("Status: Start MW II — cod22-cod.exe")
    window.ip_lbl.setText("IP: --")
    window.port_lbl.setText("Port: --")
    window.isp_lbl.setText("ISP: --")
    window.show()
    for _ in range(8):
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
    print("Failed: could not capture panel or copy fallback image.", file=sys.stderr)
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
