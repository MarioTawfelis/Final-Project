from django.test import TestCase, Client
from ..models import UserProfile

from rest_framework import status
from django.urls import reverse
from django.contrib.auth import get_user_model

User = get_user_model()


class UserProfileViewTestCase(TestCase):
    """
    Test suite for the UserProfile view.

    Methods:
    - setUp: method called before each test method.
    - test_full_name: test method for testing retrieval of a user's full name.
    """

    def setUp(self):
        self.client = Client()
        self.user = User.objects.create_user(
            email="test123@example.com",
            password="password",
            first_name="John",
            last_name="Doe",
            default_phone="555-1234",
            default_street_address_1="123 Main St",
            default_city="Springfield",
            default_country="USA",
            default_postcode="12345",
        )

    def test_full_name(self):
        """
        Test method for testing retrieval of a user's full name.
        """
        url = reverse("user-profiles-full-name", args=[self.user.pk])
        self.client.force_login(self.user)
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["full_name"], "John Doe")

    def test_view_profile(self):
        # Test that a user can view their own profile
        self.client.force_login(self.user)
        url = reverse("user-profiles-detail", args=[self.user.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            set(response.data.keys()),
            {
                "id",
                "email",
                "first_name",
                "last_name",
                "default_phone",
                "default_street_address_1",
                "default_street_address_2",
                "default_city",
                "default_country",
                "default_postcode",
                "user_permissions",
                "last_login",
                "groups",
                "password",
                "is_staff",
                "is_superuser",
            },
        )

        # Test that a superuser can view any profile
        self.client.logout()
        self.superuser = User.objects.create_superuser(
            email="admin@example.com", password="password"
        )
        self.client.force_login(self.superuser)
        url = reverse("user-profiles-detail", args=[self.user.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            set(response.data.keys()),
            {
                "id",
                "email",
                "first_name",
                "last_name",
                "default_phone",
                "default_street_address_1",
                "default_street_address_2",
                "default_city",
                "default_country",
                "default_postcode",
                "user_permissions",
                "last_login",
                "groups",
                "password",
                "is_staff",
                "is_superuser",
            },
        )

        # Test that a user cannot view another user's profile
        other_user = User.objects.create_user(
            email="other@example.com",
            password="password",
            first_name="Jane",
            last_name="Doe",
            default_phone="555-1234",
            default_street_address_1="123 Main St",
            default_city="Springfield",
            default_country="USA",
            default_postcode="12345",
        )
        self.client.logout()
        self.client.force_login(other_user)
        url = reverse("user-profiles-detail", args=[self.user.id])
        response = self.client.get(url)
        self.assertEqual(response.status_code, 403)
        self.assertEqual(
            set(response.data.keys()), {"id", "first_name", "get_full_name"}
        )
