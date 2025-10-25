# Extend python image
FROM python:3.13-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install system dependencies needed for some Python packages and Postgres client
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    gettext \
    && rm -rf /var/lib/apt/lists/*


# Copy requirements file into the image
COPY requirements.txt .

# Install Python dependencies/packages
RUN pip install --upgrade pip && pip install -r requirements.txt

# Copy project files
COPY . /app/

# Expose default port used by gunicorn (this is for production, dev uses 8000 below)
EXPOSE 8000

# Start Django server (dev)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]



