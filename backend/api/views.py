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
            try:
                serializer.save()
                return Response({"title": "apiResponse", "success": True}, status=status.HTTP_201_CREATED)
            except Exception as e:
                return Response({"title": "apiResponse", "success": False, "errors": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        # Handle validation errors
        return Response({"title": "apiResponse", "success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
