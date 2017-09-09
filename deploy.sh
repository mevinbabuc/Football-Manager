#!/bin/bash

cd /applications/Football-Manager
git pull
export COMPOSE_FILE=production.yml
docker-compose build
docker-compose down
docker-compose up -d
