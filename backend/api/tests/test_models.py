# backend/api/tests/test_models.py
import pytest
from api.models import CommunityMember

@pytest.mark.django_db  # accessing the database in test mode.
def test_community_member_create():
    """
    Test that a CommunityMember instance can be created and saved correctly.
    """
    # CommunityMember instance
    member = CommunityMember.objects.create(
        first_name="Thabo",
        last_name="Jones",
        email="thabo.jones@example.co.za",
        phone="0823456789",  # SA mobile number (dummy)
        message="Excited to join the community in CT!",
        consent=True
    )

    # Assert the member exists in the database
    assert CommunityMember.objects.count() == 1

    # Assert that fields are correctly saved
    assert member.first_name == "Thabo"
    assert member.last_name == "Jones"
    assert member.email == "thabo.jones@example.co.za"
    assert member.phone == "0823456789"
    assert member.message == "Excited to join the community in CT!"
    assert member.consent is True
    assert member.join_date is not None

    assert str(member) == "Thabo Jones"
