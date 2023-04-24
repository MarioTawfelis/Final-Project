# api/views.py
from rest_framework import viewsets
from .serializers import UserProfileSerializer
from .models import UserProfile

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
