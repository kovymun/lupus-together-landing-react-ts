import pytest
from rest_framework.test import APIClient
from api.models import CommunityMember

# Test GET req -- returns HTTP Resp: 200 OK + returns all members.
@pytest.mark.django_db
def test_get_community_members():
    # Sample community members
    CommunityMember.objects.create(
        first_name="James",
        last_name="Scott",
        email="james.scott@test.co.za",
        phone="0712345678",
        consent=True
    )

    CommunityMember.objects.create(
        first_name="Bongani",
        last_name="Zula",
        email="bongani.zula@test.co.za",
        phone="0729876543",
        consent=True
    )

    client = APIClient()
    
    response = client.get("/api/community/") 

    assert response.status_code == 200
    data = response.json()
    assert len(data) == 2
    assert data[0]["first_name"] == "James"
    assert data[1]["first_name"] == "Bongani"


# Test POST req with data.
@pytest.mark.django_db
def test_post_community_member_valid():
    client = APIClient()
    
    payload = {
        "first_name": "Zanele",
        "last_name": "Mkhize",
        "email": "zanele.mkhize@test.co.za",
        "phone": "0841234567",
        "message": "Excited to join!",
        "consent": True
    }
    
    response = client.post("/api/community/", payload, format="json")

    assert response.status_code == 201
    assert response.json()["success"] is True
    assert CommunityMember.objects.count() == 1

# Test POST req with invalid data
@pytest.mark.django_db
def test_post_community_member_invalid():
    client = APIClient()
    
    payload = {
        "first_name": "",  # Missing first name
        "last_name": "Mkhize",
        "email": "dummy_email",  # Invalid email
        "phone": "12345", # Invalid mobile number
        "consent": True
    }
    
    response = client.post("/api/community/", payload, format="json")

    assert response.status_code == 400 # bad request
    assert response.json()["success"] is False
    assert "first_name" in response.json()["errors"]
    assert "email" in response.json()["errors"]
    assert "phone" in response.json()["errors"]
