from django.test import TestCase, Client
from django.core.exceptions import ValidationError
from ..models import UserProfile

from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from ..models import UserProfile
from ..serializers import UserProfileSerializer


class UserProfileModelTests(TestCase):
    """
    Test cases for the UserProfile model.
    """

    def setUp(self):
        self.user = UserProfile.objects.create_user(
            email="test@example.com",
            password="testpassword",
            first_name="Test",
            last_name="User",
            default_phone="1234567890",
            default_street_address_1="123 Main St",
            default_street_address_2="",
            default_city="Manchester",
            default_country="UK",
        )

    def test_create_user(self):
        """
        Test creating a user with valid input.
        """
        user = UserProfile.objects.create_user(
            email="test2@example.com",
            password="testpassword",
            first_name="Test2",
            last_name="User2",
            default_phone="1234567890",
            default_street_address_1="456 High St",
            default_street_address_2="Apt 2",
            default_city="Manchester",
            default_country="UK",
        )

        # Verify that the user was created with the correct details.
        self.assertEqual(user.email, "test2@example.com")
        self.assertEqual(user.first_name, "Test2")
        self.assertEqual(user.last_name, "User2")
        self.assertEqual(user.default_phone, "1234567890")
        self.assertEqual(user.default_street_address_1, "456 High St")
        self.assertEqual(user.default_street_address_2, "Apt 2")
        self.assertEqual(user.default_city, "Manchester")
        self.assertEqual(user.default_country, "UK")
        self.assertTrue(user.check_password("testpassword"))

    def test_create_user_without_email(self):
        """
        Test creating a user without email.
        """
        with self.assertRaises(ValueError):
            UserProfile.objects.create_user(
                email=None,
                password="testpassword",
                first_name="Test2",
                last_name="User2",
                default_phone="1234567890",
                default_street_address_1="456 High St",
                default_street_address_2="",
                default_city="Manchester",
                default_country="UK",
            )

    def test_create_user_with_invalid_email(self):
        """
        Test creating a user with invalid email format.
        """
        with self.assertRaises(ValueError):
            UserProfile.objects.create_user(
                email="invalidemail",
                password="testpassword",
                first_name="Test2",
                last_name="User2",
                default_phone="1234567890",
                default_street_address_1="456 High St",
                default_street_address_2="",
                default_city="Manchester",
                default_country="UK",
            )

    def test_create_superuser(self):
        """
        Test creating a superuser with valid input.
        """
        superuser = UserProfile.objects.create_superuser(
            email="superuser@example.com",
            password="testpassword",
            first_name="Super",
            last_name="User",
            default_phone="1234567890",
            default_street_address_1="456 High St",
            default_street_address_2="",
            default_city="Manchester",
            default_country="UK",
        )
        # Verify that the superuser was created with the correct details
        self.assertEqual(superuser.email, "superuser@example.com")
        self.assertEqual(superuser.first_name, "Super")
        self.assertEqual(superuser.last_name, "User")
        self.assertEqual(superuser.default_phone, "1234567890")
        self.assertEqual(superuser.default_street_address_1, "456 High St")
        self.assertEqual(superuser.default_street_address_2, "")
        self.assertEqual(superuser.default_city, "Manchester")
        self.assertEqual(superuser.default_country, "UK")
        self.assertTrue(superuser.check_password("testpassword"))
        self.assertTrue(superuser.is_staff)
        self.assertTrue(superuser.is_superuser)

    def test_get_full_name(self):
        """
        Test getting the full name of a user
        """
        self.assertEqual(self.user.get_full_name(), "Test User")

    def test_get_short_name(self):
        """
        Test getting the short name of a user
        """
        self.assertEqual(self.user.get_short_name(), "Test")
