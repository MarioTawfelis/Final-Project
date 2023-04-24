from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import UserProfileSerializer
from .models import UserProfile


class UserProfileViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user profiles.
    """
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    @action(detail=True, methods=['get'], name='Full Name')
    def full_name(self, request, pk=None):
        """
        Returns the full name of a user given their ID.

        Parameters:
        request (Request): The request object.
        pk (int): The ID of the user to get the full name for.

        Returns:
        Response: A response object containing the full name of the user.
        """
        user = self.get_object()
        full_name = user.get_full_name()
        return Response({'full_name': full_name})
