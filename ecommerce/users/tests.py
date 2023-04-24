from django.test import TestCase
from django.core.exceptions import ValidationError
from .models import UserProfile

from django.test import TestCase
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse
from .models import UserProfile
from .serializers import UserProfileSerializer


class UserProfileModelTests(TestCase):

    def setUp(self):
        self.user = UserProfile.objects.create_user(
            email='test@example.com',
            password='testpassword',
            first_name='Test',
            last_name='User',
            default_phone='1234567890',
            default_street_address_1='123 Main St',
            default_street_address_2='',
            default_city='Manchester',
            default_country='UK',
        )


    def test_create_user(self):
        """
        Test creating a user with valid input
        """
        user = UserProfile.objects.create_user(
            email='test2@example.com',
            password='testpassword',
            first_name='Test2',
            last_name='User2',
            default_phone='1234567890',
            default_street_address_1='456 High St',
            default_street_address_2='Apt 2',
            default_city='Manchester',
            default_country='UK',
        )

        # Verify that the user was created with the correct details
        self.assertEqual(user.email, 'test2@example.com')
        self.assertEqual(user.first_name, 'Test2')
        self.assertEqual(user.last_name, 'User2')
        self.assertEqual(user.default_phone, '1234567890')
        self.assertEqual(user.default_street_address_1, '456 High St')
        self.assertEqual(user.default_street_address_2, 'Apt 2')
        self.assertEqual(user.default_city, 'Manchester')
        self.assertEqual(user.default_country, 'UK')
        self.assertTrue(user.check_password('testpassword'))

    def test_create_user_without_email(self):
        """
        Test creating a user without email
        """
        with self.assertRaises(ValueError):
            UserProfile.objects.create_user(
                email=None,
                password='testpassword',
                first_name='Test2',
                last_name='User2',
                default_phone='1234567890',
                default_street_address_1='456 High St',
                default_street_address_2='',
                default_city='Manchester',
                default_country='UK',
            )

    def test_create_user_with_invalid_email(self):
        """
        Test creating a user with invalid email format
        """
        with self.assertRaises(ValueError):
            UserProfile.objects.create_user(
                email='invalidemail',
                password='testpassword',
                first_name='Test2',
                last_name='User2',
                default_phone='1234567890',
                default_street_address_1='456 High St',
                default_street_address_2='',
                default_city='Manchester',
                default_country='UK',
            )

    def test_create_superuser(self):
        """
        Test creating a superuser with valid input
        """
        superuser = UserProfile.objects.create_superuser(
            email='superuser@example.com',
            password='testpassword',
            first_name='Super',
            last_name='User',
            default_phone='1234567890',
            default_street_address_1='456 High St',
            default_street_address_2='',
            default_city='Manchester',
            default_country='UK',
        )

        # Verify that the superuser was created with the correct details
        self.assertEqual(superuser.email, 'superuser@example.com')
        self.assertEqual(superuser.first_name, 'Super')
        self.assertEqual(superuser.last_name, 'User')
        self.assertEqual(superuser.default_phone, '1234567890')
        self.assertEqual(superuser.default_street_address_1, '456 High St')
        self.assertEqual(superuser.default_street_address_2, '')
        self.assertEqual(superuser.default_city, 'Manchester')
        self.assertEqual(superuser.default_country, 'UK')
        self.assertTrue(superuser.check_password('testpassword'))
        self.assertTrue(superuser.is_staff)
        self.assertTrue(superuser.is_superuser)

    def test_get_full_name(self):
        """
        Test getting the full name of a user
        """
        self.assertEqual(self.user.get_full_name(), 'Test User')

    def test_get_short_name(self):
        """
        Test getting the short name of a user
        """
        self.assertEqual(self.user.get_short_name(), 'Test')

# Define the API endpoint URL
USER_PROFILES_URL = reverse('userprofile-list')

class UserProfileTests(TestCase):
    def setUp(self):
        self.client = APIClient()

    def test_create_user_profile(self):
        payload = {
            'email': 'test1@example.com',
            'first_name': 'John',
            'last_name': 'Doe',
            'default_phone': '+44 1234 567890',
            'default_street_address_1': '1 High Street',
            'default_street_address_2': 'London',
            'default_city': 'London',
            'default_country': 'United Kingdom',
            'password': 'test1234'
        }
        response = self.client.post(USER_PROFILES_URL, payload)
        if response.status_code != status.HTTP_201_CREATED:
            print(f"Failed to create user profile. Status code: {response.status_code}")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_retrieve_user_profile(self):
        user_profile = UserProfile.objects.create(
            email='test1@example.com',
            first_name='John',
            last_name='Doe',
            default_phone='+44 1234 567890',
            default_street_address_1='1 High Street',
            default_street_address_2='London',
            default_city='London',
            default_country='United Kingdom'
        )
        response = self.client.get(reverse('userprofile-detail', args=[user_profile.id]))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        serializer = UserProfileSerializer(user_profile)
        self.assertEqual(response.data, serializer.data)

    def test_update_user_profile(self):
        user_profile = UserProfile.objects.create(
            email='test1@example.com',
            first_name='John',
            last_name='Doe',
            default_phone='+44 1234 567890',
            default_street_address_1='1 High Street',
            default_street_address_2='London',
            default_city='London',
            default_country='United Kingdom'
        )
        payload = {'first_name': 'Jane', 'last_name': 'Doe'}
        response = self.client.patch(reverse('userprofile-detail', args=[user_profile.id]), payload)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        user_profile.refresh_from_db()
        self.assertEqual(user_profile.first_name, payload['first_name'])
        self.assertEqual(user_profile.last_name, payload['last_name'])

    def test_delete_user_profile(self):
        user_profile = UserProfile.objects.create(
            email='test1@example.com',
            first_name='John',
            last_name='Doe',
            default_phone='+44 1234 567890',
            default_street_address_1='1 High Street',
            default_street_address_2='London',
            default_city='London',
            default_country='United Kingdom'
        )
        response = self.client.delete(reverse('userprofile-detail', args=[user_profile.id]))
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        self.assertFalse(UserProfile.objects.filter(id=user_profile.id).exists())

    def test_permissions(self):
        user_profile = UserProfile.objects.create(
            email='test1@example.com',
            first_name='John',
            last_name='Doe',
            default_phone='+44 1234 567890',
            default_street_address_1='1 High Street',
            default_street_address_2='London',
            default_city='London',
            default_country='United Kingdom'
        )

        # Ensure unauthenticated user cannot access API views
        self.client.logout()
        response = self.client.get(USER_PROFILES_URL)
        self.assertEqual(response.status_code,status.HTTP_401_UNAUTHORIZED)

        # Ensure authenticated user without permissions cannot access API views
        self.client.login(email='test@example.com', password='test1234')
        response = self.client.get(USER_PROFILES_URL)
        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        # Ensure authenticated superuser can access API views
        self.client.logout()
        superuser = UserProfile.objects.create_superuser(
            email='superuser@example.com',
            password='test1234',
            first_name='Super',
            last_name='User',
            default_phone='+44 1234 567890',
            default_street_address_1='1 High Street',
            default_street_address_2='London',
            default_city='London',
            default_country='United Kingdom'
        )
        self.client.login(email='superuser@example.com', password='test1234')
        response = self.client.get(USER_PROFILES_URL)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
