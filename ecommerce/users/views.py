from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .serializers import UserProfileSerializer
from .models import UserProfile


class UserProfileViewSet(
    mixins.RetrieveModelMixin,
    mixins.UpdateModelMixin,
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    """
    A viewset for viewing, creating, and editing user profiles.
    """

    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    # permission_classes = [IsAuthenticated]

    @action(detail=True, methods=["get"], name="Full Name")
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
        return Response({"full_name": full_name})

    def create(self, request):
        """
        Create a new user profile.

        Parameters:
        request (Request): The request object.

        Returns:
        Response: A response object containing the serialized user profile data.
        """
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user_profile = serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

    def list(self, request):
        queryset = self.filter_queryset(self.get_queryset())
        serializer = self.get_serializer(queryset, many=True)

        return Response(serializer.data)
