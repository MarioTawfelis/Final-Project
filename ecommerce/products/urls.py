from django.urls import path, include
from rest_framework import routers
from .views import ProductViewSet, TagViewSet

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet)
router.register(r'tags', TagViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
