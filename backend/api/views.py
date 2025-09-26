from .serializers import CommunityMemberSerializer
from .models import CommunityMember
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

@api_view(['GET', 'POST'])
def community_members(request):
    # Handle GET requests for community members
    if request.method == 'GET':
        # Get all community members from SQLITE3 DB (CommunityMember Table)
        members = CommunityMember.objects.all()
        serializer = CommunityMemberSerializer(members, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    # Handle POST requests for community members
    elif request.method == 'POST':
        serializer = CommunityMemberSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
