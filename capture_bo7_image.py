#!/usr/bin/env python3
"""Copy BO7 Thunex product screenshot into the shop assets folder."""
from __future__ import annotations

import shutil
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent
OUT_DIR = ROOT / "assets"
OUT = OUT_DIR / "bo7-thunex.png"

CANDIDATES = [
    OUT,
    ROOT / "bo7-thunex.png",
    Path.home() / "Desktop" / "bo7-thunex.png",
    Path.home() / "Desktop" / "bo7-thunex.jpg",
    Path.home() / "Downloads" / "bo7-thunex.png",
    Path.home() / "Downloads" / "bo7-thunex.jpg",
    Path.home() / "Pictures" / "bo7-thunex.png",
    Path.home() / "Pictures" / "Screenshots" / "bo7-thunex.png",
]


def copy_from_candidates() -> bool:
    for src in CANDIDATES:
        if src == OUT or not src.is_file():
            continue
        OUT_DIR.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src, OUT)
        print(f"Copied screenshot -> {OUT} ({OUT.stat().st_size} bytes)")
        return True
    return False


def save_clipboard_image() -> bool:
    try:
        from PIL import ImageGrab
    except ImportError:
        return False

    image = ImageGrab.grabclipboard()
    if image is None:
        return False

    OUT_DIR.mkdir(parents=True, exist_ok=True)
    image.save(OUT, format="PNG")
    print(f"Saved clipboard image -> {OUT} ({OUT.stat().st_size} bytes)")
    return True


def main() -> int:
    if OUT.is_file() and OUT.stat().st_size > 0:
        print(f"Image already exists: {OUT}")
        return 0
    if copy_from_candidates():
        return 0
    if save_clipboard_image():
        return 0
    print(
        "Could not find BO7 screenshot. Save your image as one of:\n"
        f"  {ROOT / 'bo7-thunex.png'}\n"
        f"  {Path.home() / 'Desktop' / 'bo7-thunex.png'}\n"
        "Or copy the image to your clipboard and run this script again.",
        file=sys.stderr,
    )
    return 1


if __name__ == "__main__":
    raise SystemExit(main())
