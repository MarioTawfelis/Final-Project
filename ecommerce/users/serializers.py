"""
This module defines the serializer classes for the UserProfile model.

Classes:
- UserProfileSerializer: A serializer class for the UserProfile model.

"""

from rest_framework import serializers
from .models import UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    """
    A serializer class for the UserProfile model.

    Attributes:
    -----------
    Meta:
        model (UserProfile): The UserProfile model class.
        fields (str): A string containing the names of all fields to be included in the serialized representation. In this case, all fields are included.
    """
    class Meta:
        model = UserProfile
        fields = '__all__'
