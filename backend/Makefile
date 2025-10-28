# Activate virtual environment manually before using this Makefile:
#   source venv/Scripts/activate   (Windows)
#   source venv/bin/activate       (Linux/Mac)

.PHONY: run makemigrations migrate lint docker-build docker-build-run docker-build-web docker-up docker-up-background docker-down docker-makemigrations docker-migrate docker-down-volumes docker-logs docker-ps

# -------- Local Virtualenv / Django Specific Commands -------- #

# venv-run:
# 	@echo "Activating local virtual environment..."
# 	source venv\Scripts\activate

# venv-close:
# 	@echo "Deactivating local virtual environment..."
# 	deactivate

# -------- Run Django Development Server --------
run:
	@echo "Starting Django development server locally..."
	python manage.py runserver

# -------- Database Migrations --------
makemigrations:
	@echo "Making new migrations..."
	python manage.py makemigrations

migrate:
	@echo "Applying migrations..."
	python manage.py migrate

# -------- Testing --------
# Commented out for now, will configure later
# test:
#	@echo "Running tests..."
#	pytest

# -------- Linting and Cross-checks --------
lint:
	@echo "Linting code..."
	flake8 .

# -------- Docker Commands -------- #
docker-build:
	@echo "Building all containers..."
	docker-compose build

docker-build-run:
	@echo "Building and starting all containers..."
	docker-compose up --build

docker-build-web:
	@echo "Building web container (package dependencies)..."
	docker-compose build web

docker-up:
	@echo "Starting all containers in foreground..."
	docker-compose up

docker-up-background:
	@echo "Starting all containers..."
	docker-compose up -d

docker-down:
	@echo "Stopping all containers..."
	docker-compose down

docker-makemigrations:
	@echo "Creating migrations inside web container..."
	docker-compose exec web python manage.py makemigrations

docker-migrate:
	@echo "Applying migrations inside web container..."
	docker-compose exec web python manage.py migrate

docker-down-volumes:
	@echo "Stopping containers and removing volumes..."
	docker-compose down -v

docker-logs:
	@echo "Showing logs for all containers..."
	docker-compose logs -f

docker-ps:
	@echo "Checking which containers are running..."
	docker ps





