#!/usr/bin/env python3
"""Build a GitHub Pages-ready static artifact."""

from __future__ import annotations

import os
import shutil
import stat
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"


def copy_path(source: Path, destination: Path) -> None:
    if source.is_dir():
        shutil.copytree(source, destination, dirs_exist_ok=True)
    else:
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source, destination)


if __name__ == "__main__":
    if DIST.exists():
        def make_writable_and_retry(function, path, _exc_info):
            os.chmod(path, stat.S_IWRITE)
            function(path)

        shutil.rmtree(DIST, onerror=make_writable_and_retry)
    DIST.mkdir()

    for name in ["index.html", "src", "assets", "README.md"]:
        copy_path(ROOT / name, DIST / name)

    # GitHub Pages serves 404.html for unknown paths. Reusing the SPA shell keeps
    # direct links such as /characters functional after deployment.
    shutil.copy2(ROOT / "index.html", DIST / "404.html")
    (DIST / ".nojekyll").write_text("", encoding="utf-8")
    print(f"Built GitHub Pages artifact at {DIST}")
