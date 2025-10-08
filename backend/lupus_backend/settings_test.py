from .settings import *  # base settings
from pathlib import Path

# Use SQLite for testing
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db_test.sqlite3",
    }
}
