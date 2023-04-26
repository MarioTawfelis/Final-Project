from django.urls import path

from . import views
from django.urls import path, include
from rest_framework import routers
from .views import HomePageView
from . import views

# router = routers.DefaultRouter()
# router.register(r'charge', HomePageView)

urlpatterns = [
	path('', views.HomePageView.as_view(), name='home'),
    path('charge/', HomePageView.charge, name='charge'),
    #path('', include(router.urls)),
    #path('', HomePageView.home, name='home'),    
]


	
	



