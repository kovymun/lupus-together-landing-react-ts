import pytest
from rest_framework.test import APIClient
from django.conf import settings

@pytest.mark.django_db
def test_post_succeeds_with_correct_token():
    client = APIClient()
    payload = {
        "first_name": "Sally",
        "last_name": "Pillai",
        "email": "sally.pillai@example.com",
        "phone": "0712345678",
        "message": "Hello, I would like to join the community.",
        "consent": True
    }
    resp = client.post(
        "/api/community/",
        payload,
        format='json',
        # Use the correct secret token from settings
        HTTP_X_FRONTEND_KEY=settings.FE_TOKEN  
    )
    assert resp.status_code == 201
    assert resp.json() == {"title": "apiResponse", "success": True}

@pytest.mark.django_db
def test_post_rejected_with_wrong_token():
    client = APIClient()
    payload = {
        "first_name": "Sally",
        "last_name": "Pillai",
        "email": "sally.pillai@example.com",
        "phone": "0712345678",
        "message": "Hello, I would like to join the community.",
        "consent": True
    }
    # Use wrong token
    resp = client.post(
        "/api/community/",
        payload,
        format='json',
        HTTP_X_FRONTEND_KEY="wrongkey"
    )
    assert resp.status_code == 401
    assert resp.json() == {"title": "apiResponse", "success": False, "errors": "Unauthorized request"}

@pytest.mark.django_db
def test_post_rejected_with_missing_token():
    client = APIClient()
    payload = {
        "first_name": "Sally",
        "last_name": "Pillai",
        "email": "sally.pillai@example.com",
        "phone": "0712345678",
        "message": "Hello, I would like to join the community.",
        "consent": True
    }
    # Missing token
    resp = client.post("/api/community/", payload, format='json')
    assert resp.status_code == 401
    assert resp.json() == {"title": "apiResponse", "success": False, "errors": "Unauthorized request"}
