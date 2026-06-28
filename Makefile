COMPOSE := docker compose -f docker-compose.dev.yml

.PHONY: up down build logs migrate migrate-fresh seed serve

up:
	$(COMPOSE) up -d

down:
	$(COMPOSE) down -v

build:
	$(COMPOSE) build --no-cache

logs:
	$(COMPOSE) logs -f web

migrate:
	$(COMPOSE) exec web node ace migration:run --force

migrate-fresh:
	$(COMPOSE) exec web node ace migration:fresh --force

seed:
	$(COMPOSE) exec web node ace db:seed

serve:
	cd app && node ace serve --hmr
