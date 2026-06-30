#!/usr/bin/env bash
set -euo pipefail

if [ -d node_modules ]; then
  sudo chown -R "$(id -u):$(id -g)" node_modules
fi

if [ -f package-lock.json ]; then
  npm ci
elif [ -f pnpm-lock.yaml ]; then
  pnpm install --frozen-lockfile
elif [ -f package.json ]; then
  npm install
fi

if [ -f pyproject.toml ]; then
  python3 -m pip install --break-system-packages --user -e ".[dev]" || python3 -m pip install --break-system-packages --user -e .
fi

if [ -d x-likes-researcher ] && [ -f x-likes-researcher/pyproject.toml ]; then
  python3 -m pip install --break-system-packages --user -e x-likes-researcher
fi
