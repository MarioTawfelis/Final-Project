from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register(r"user-profiles", views.UserProfileViewSet, basename="user-profiles")

urlpatterns = [
    path("", include(router.urls)),
]