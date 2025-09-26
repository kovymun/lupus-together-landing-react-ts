#  Community Member Serializer
from rest_framework import serializers
from api.models import CommunityMember

class CommunityMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityMember
        fields = "__all__"