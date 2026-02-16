#!/bin/bash

case "$1" in
  up|"")
    docker compose -f docker-compose.dev.yml up -d
    ;;
  down)
    docker compose -f docker-compose.dev.yml down -v
    ;;
  migrate)
    cd app && node ace migration:run
    ;;
  migrate:fresh)
    cd app && node ace migration:fresh
    ;;
  seed)
    cd app && node ace db:seed
    ;;
  serve)
    cd app && node ace serve --watch
    ;;
  *)
    echo "Usage: ./dev.sh [up|down|migrate|migrate:fresh|seed|serve]"
    exit 1
    ;;
esac
