# api/views.py
from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .serializers import UserProfileSerializer
from .models import UserProfile

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

    @action(detail=True, methods=['get'], name='Full Name')
    def full_name(self, request, pk=None):
        user = self.get_object()
        full_name = user.get_full_name()
        return Response({'full_name': full_name})
