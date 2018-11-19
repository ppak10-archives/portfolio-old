#!/usr/bin/env bash
set -e

# Build app and api containers
docker-compose -f docker/docker-compose.dev.yml build

docker-compose -f docker/docker-compose.dev.yml up -d db
sleep 5
docker-compose -f docker/docker-compose.dev.yml stop db