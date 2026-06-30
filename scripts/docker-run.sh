#!/usr/bin/env bash
set -euo pipefail

command="${*:-npm run check && npm run build:pages}"
docker compose run --rm workspace bash -lc "$command"
