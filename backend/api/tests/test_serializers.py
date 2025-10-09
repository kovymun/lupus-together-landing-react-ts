import pytest
from api.serializers import CommunityMemberSerializer
from api.models import CommunityMember

# Test that data passes validation and saves correctly.
@pytest.mark.django_db
def test_serializer_valid_data():
    data = {
        "first_name": "Sally",
        "last_name": "Jacobs",
        "email": "sally.jacobs@test.co.za",
        "phone": "0823451234",
        "message": "Keen to join.",
        "consent": True,
    }

    serializer = CommunityMemberSerializer(data=data)
    assert serializer.is_valid(), serializer.errors 
    member = serializer.save()  

    # Assert data is stored correctly
    assert member.first_name == "Sally"
    assert member.email == "sally.jacobs@test.co.za"
    assert CommunityMember.objects.count() == 1

# Test that missing first_name triggers validation error.    
@pytest.mark.django_db
def test_serializer_missing_first_name():
    data = {
        "last_name": "Jacobs",
        "email": "sally.jacobs@test.co.za",
        "phone": "0823451234",
        "message": "Hi",
        "consent": True,
    }

    serializer = CommunityMemberSerializer(data=data)
    assert not serializer.is_valid()
    assert "first_name" in serializer.errors
    
# Test that missing last_name triggers validation error.
@pytest.mark.django_db
def test_serializer_missing_last_name():
    data = {
        "first_name": "Sally",
        "email": "sally.jacobs@test.co.za",
        "phone": "0823451234",
        "message": "Hi",
        "consent": True,
    }

    serializer = CommunityMemberSerializer(data=data)
    assert not serializer.is_valid()
    assert "last_name" in serializer.errors

# Test that invalid email formats are rejected.
@pytest.mark.django_db
def test_serializer_invalid_email_format():
    data = {
        "first_name": "Sally",
        "last_name": "Jacobs",
        "email": "sally.email",  # 👈 invalid email
        "phone": "0823451234",
        "message": "Hi!",
        "consent": True,
    }

    serializer = CommunityMemberSerializer(data=data)
    assert not serializer.is_valid()
    assert "email" in serializer.errors

# Test that duplicate emails are not allowed.
@pytest.mark.django_db
def test_serializer_duplicate_email():
   # DB record (intended to be used to test duplicate email)
    CommunityMember.objects.create(
        first_name="Candice",
    last_name="Naidoo",
        email="candice.naidoo@test.co.za",
        phone="0839876543",
        consent=True,
    )

    # Attempt to use same email again
    data = {
        "first_name": "Sally",
        "last_name": "Jacobs",
        "email": "candice.naidoo@test.co.za",  # 👈 duplicate
        "phone": "0823451234",
        "message": "Testing duplicate email",
        "consent": True,
    }

    serializer = CommunityMemberSerializer(data=data)
    assert not serializer.is_valid()
    assert "email" in serializer.errors

# Test that phone number must be exactly 10 digits (SA format).
@pytest.mark.django_db
def test_serializer_invalid_phone_number():
    data = {
        "first_name": "Sally",
        "last_name": "Jacobs",
        "email": "sally.jacobs@test.co.za",
        "phone": "08212345",  # intentionally invalid (short) mobile number
        "message": "Phone number check",
        "consent": True,
    }

    serializer = CommunityMemberSerializer(data=data)
    assert not serializer.is_valid()
    assert "phone" in serializer.errors

# Test that consent field is required.
@pytest.mark.django_db
def test_serializer_missing_consent():
    data = {
        "first_name": "Sally",
        "last_name": "Jacobs",
        "email": "sally.jacobs@test.co.za",
        "phone": "0823451234",
        "message": "Checking consent requirement",
    }

    serializer = CommunityMemberSerializer(data=data)
    assert not serializer.is_valid()
    assert "consent" in serializer.errors
