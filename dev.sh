#!/bin/bash

case "$1" in
  up|"")
    docker compose -f docker-compose.dev.yml up -d
    ;;
  down)
    docker compose -f docker-compose.dev.yml down -v
    ;;
  build)
    docker compose -f docker-compose.dev.yml build --no-cache
    ;;
  logs)
    docker compose -f docker-compose.dev.yml logs -f web
    ;;
  migrate)
    docker compose -f docker-compose.dev.yml exec web node ace migration:run --force
    ;;
  migrate:fresh)
    docker compose -f docker-compose.dev.yml exec web node ace migration:fresh --force
    ;;
  seed)
    docker compose -f docker-compose.dev.yml exec web node ace db:seed
    ;;
  serve)
    cd app && node ace serve --hmr
    ;;
  *)
    echo "Usage: ./dev.sh [up|down|build|logs|migrate|migrate:fresh|seed|serve]"
    exit 1
    ;;
esac
