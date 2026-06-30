FROM mcr.microsoft.com/devcontainers/javascript-node:1-22-bookworm

USER root

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
    python3 \
    python-is-python3 \
    python3-pip \
    python3-venv \
    poppler-utils \
    qpdf \
    ffmpeg \
    curl \
    git \
    gh \
    ca-certificates \
  && rm -rf /var/lib/apt/lists/*

RUN corepack enable && corepack prepare pnpm@11.7.0 --activate

USER node

ENV CI=true \
    PYTHONUTF8=1 \
    PYTHONIOENCODING=utf-8 \
    NPM_CONFIG_UPDATE_NOTIFIER=false
