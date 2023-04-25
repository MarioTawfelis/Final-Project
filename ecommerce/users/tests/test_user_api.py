from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from ..models import UserProfile
from ..serializers import UserProfileSerializer

# Define the API endpoint URL
USER_PROFILES_URL = reverse("user-profiles-list")


class UserProfileTests(TestCase):
    """
    Test suite for the UserProfile model views.

    Methods:
    - setUp: method called before each test method.
    - test_create_user_profile: test method for creating a new user profile.
    - test_retrieve_user_profile: test method for retrieving a user profile.
    - test_update_user_profile: test method for updating a user profile.
    - test_delete_user_profile: test method for deleting a user profile.
    - test_permissions: test method for testing permissions of user profile.
    """

    def setUp(self):
        """
        Method called before each test method.
        """
        self.client = APIClient()

    def test_create_user_profile(self):
        """
        Test method for creating a new user profile.
        """
        payload = {
            "email": "test1@example.com",
            "first_name": "John",
            "last_name": "Doe",
            "default_phone": "+44 1234 567890",
            "default_street_address_1": "1 High Street",
            "default_street_address_2": "London",
            "default_city": "London",
            "default_country": "United Kingdom",
            "default_postcode": "12345",
            "password": "test1234",
        }
        response = self.client.post(USER_PROFILES_URL, payload)
        if response.status_code != status.HTTP_201_CREATED:
            print(f"Failed to create user profile. Status code: {response.status_code}")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_retrieve_user_profile(self):
        """
        Test method for retrieving a user profile.
        """
        user_profile = UserProfile.objects.create(
            email="test1@example.com",
            first_name="John",
            last_name="Doe",
            default_phone="+44 1234 567890",
            default_street_address_1="1 High Street",
            default_street_address_2="London",
            default_city="London",
            default_country="United Kingdom",
            default_postcode="12345",
        )
        response = self.client.get(
            reverse("user-profiles-detail", args=[user_profile.id])
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        serializer = UserProfileSerializer(user_profile)
        self.assertEqual(response.data, serializer.data)

    def test_update_user_profile(self):
        """
        Test method for updating a user profile.
        """
        user_profile = UserProfile.objects.create(
            email="test1@example.com",
            first_name="John",
            last_name="Doe",
            default_phone="+44 1234 567890",
            default_street_address_1="1 High Street",
            default_street_address_2="London",
            default_city="London",
            default_country="United Kingdom",
            default_postcode="12345",
        )
        payload = {"first_name": "Jane", "last_name": "Doe"}
        response = self.client.patch(
            reverse("user-profiles-detail", args=[user_profile.id]), payload
        )
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        user_profile.refresh_from_db()
        self.assertEqual(user_profile.first_name, payload["first_name"])
        self.assertEqual(user_profile.last_name, payload["last_name"])
