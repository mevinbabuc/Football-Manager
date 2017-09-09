#!/bin/bash

cd /applications/Football-Manager
git pull
export COMPOSE_FILE=production.yml
docker-compose build
docker-compose down
docker-compose up -d
docker-compose run django python manage.py migrate
docker-compose run django python manage.py collectstatic
