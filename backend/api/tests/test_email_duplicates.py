import pytest
from django.urls import reverse
from api.models import CommunityMember

@pytest.mark.django_db
def test_api_rejects_duplicate_email_on_second_post(client):
    # test payload
    payload = {
        "first_name": "Tanya",
        "last_name": "Founders",
        "email": "tanya.founders@test.co.za",
        "phone": "0811234567",
        "message": "Hi",
        "consent": True,
    }
    
     # URL for the POST req endpoint
    url = "/api/community/"

    # First POST request: should succeed
    first_response = client.post(url, payload, content_type="application/json")
    assert first_response.status_code == 201
    assert CommunityMember.objects.count() == 1
    assert first_response.json().get("success") is True

    # Second POST request with the same email: this should fail due to email duplication
    second_response = client.post(url, payload, content_type="application/json")
    response_data = second_response.json()
    assert second_response.status_code == 400
    assert "email" in response_data["errors"]
    assert CommunityMember.objects.count() == 1  # Check only one record exists
