from django.urls import path, include
from rest_framework import routers
from .views import ProductViewSet, TagViewSet
from products import views

router = routers.DefaultRouter()
router.register(r'products', ProductViewSet, basename="product")
router.register(r'tags', TagViewSet)

urlpatterns = [
    path('products/', views.product_list, name='product-list'),
    path('', include(router.urls)),
]


