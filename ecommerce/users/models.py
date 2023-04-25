from django.contrib.auth.models import (
    AbstractBaseUser,
    BaseUserManager,
    PermissionsMixin,
)
from django.db import models
from django.utils.translation import gettext_lazy as _
from django.core.validators import validate_email
from django.core.exceptions import ValidationError


class UserProfileManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        """
        Create and save a new user with the given email and password.

        Args:
            email (str): Email address of the user.
            password (str): Password of the user.
            **extra_fields: Additional fields to be saved for the user.

        Returns:
            UserProfile: Newly created user instance.

        Raises:
            ValueError: If email is not provided or has invalid format.
        """
        if not email:
            raise ValueError("The Email field must be set")

        try:
            validate_email(email)
        except ValidationError:
            raise ValueError("Invalid Email format")

        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        """
        Create and save a new superuser with the given email and password.

        Args:
            email (str): Email address of the superuser.
            password (str): Password of the superuser.
            **extra_fields: Additional fields to be saved for the superuser.

        Returns:
            UserProfile: Newly created superuser instance.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        return self.create_user(email, password, **extra_fields)


class UserProfile(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(_("email address"), unique=True, null=False)
    first_name = models.CharField(max_length=30, null=False)
    last_name = models.CharField(max_length=30, null=False)
    default_phone = models.CharField(max_length=20, null=False)
    default_street_address_1 = models.CharField(max_length=100, null=False)
    default_street_address_2 = models.CharField(max_length=100, blank=True)
    default_city = models.CharField(max_length=50, null=False)
    default_country = models.CharField(max_length=50, null=False)
    default_postcode = models.CharField(max_length=10, null=False)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = UserProfileManager()

    class Meta:
        verbose_name = _("user")
        verbose_name_plural = _("users")

    def __str__(self):
        """
        Returns string representation of the user instance.

        Returns:
            str: Email address of the user.
        """
        return self.email

    def get_full_name(self):
        """
        Returns the full name of the user.

        Returns:
            str: Full name of the user (first name + last name).
        """
        full_name = "%s %s" % (self.first_name, self.last_name)
        return full_name.strip()

    def get_short_name(self):
        """
        Returns the short name of the user.

        Returns:
            str: Short name of the user (first name).
        """
        return self.first_name