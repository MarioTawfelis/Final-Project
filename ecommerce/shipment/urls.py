from django.urls import path
from .views import (
    ShipmentListCreateView,
    ShipmentRetrieveUpdateDestroyView,
    ShipmentLineItemListCreateView,
    ShipmentLineItemRetrieveUpdateDestroyView,
)


urlpatterns = [
    path("shipments/", ShipmentListCreateView.as_view(), name="shipment-list-create"),
    path(
        "shipments/<int:pk>/",
        ShipmentRetrieveUpdateDestroyView.as_view(),
        name="shipment-retrieve-update-destroy",
    ),
    path(
        "shipment-line-items/",
        ShipmentLineItemListCreateView.as_view(),
        name="shipment-line-item-list-create",
    ),
    path(
        "shipment-line-items/<int:pk>/",
        ShipmentLineItemRetrieveUpdateDestroyView.as_view(),
        name="shipment-line-item-retrieve-update-destroy",
    ),
]
